"use client";

import {
  createElement,
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type RevealVariant =
  | "rise"
  | "fade"
  | "slide"
  | "soft"
  | "eyebrow"
  | "words";

type RevealStyle = CSSProperties & Record<`--${string}`, string | number>;

type RevealBlockProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
  staggerIndex?: number;
  style?: CSSProperties;
  threshold?: number;
  variant?: RevealVariant;
  [key: string]: unknown;
};

export function RevealBlock({
  as: Component = "div",
  children,
  className,
  delay = 0,
  once = true,
  rootMargin = "0px 0px -8% 0px",
  staggerIndex = 0,
  style,
  threshold = 0.2,
  variant = "rise",
  ...rest
}: RevealBlockProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const computedDelay = delay + staggerIndex * 70;
  const revealStyle: RevealStyle = {
    ...style,
    "--reveal-delay": `${computedDelay}ms`,
  };
  const classes = ["reveal-block", className].filter(Boolean).join(" ");

  useEffect(() => {
    if (!node) {
      return;
    }

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frame = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, once, rootMargin, threshold]);

  return createElement(
    Component,
    {
      ...rest,
      ref: setNode,
      className: classes,
      style: revealStyle,
      "data-reveal": variant,
      "data-reveal-visible": isVisible ? "true" : "false",
    },
    children,
  );
}
