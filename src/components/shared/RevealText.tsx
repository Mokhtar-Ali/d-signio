"use client";

import { Fragment, type CSSProperties, type ElementType } from "react";
import { RevealBlock, type RevealVariant } from "@/components/shared/RevealBlock";

type RevealTextVariant = Extract<
  RevealVariant,
  "rise" | "fade" | "slide" | "soft" | "words"
>;

type WordStyle = CSSProperties & Record<`--${string}`, string | number>;

type RevealTextProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
  once?: boolean;
  stagger?: number;
  text: string;
  variant?: RevealTextVariant;
  [key: string]: unknown;
};

const wordSplitter = /(\s+)/;

function renderWords(text: string, delay: number, stagger: number) {
  let wordIndex = 0;

  return text.split(wordSplitter).map((part, index) => {
    if (!part) {
      return null;
    }

    if (wordSplitter.test(part)) {
      return <Fragment key={`space-${index}`}>{part}</Fragment>;
    }

    const currentWordIndex = wordIndex;
    wordIndex += 1;
    const style: WordStyle = {
      "--word-delay": `${delay + currentWordIndex * stagger}ms`,
    };

    return (
      <span className="reveal-word-mask" key={`${part}-${index}`} style={style}>
        <span className="reveal-word">{part}</span>
      </span>
    );
  });
}

export function RevealText({
  as = "p",
  className,
  delay = 0,
  stagger = 60,
  text,
  variant = "words",
  ...rest
}: RevealTextProps) {
  const classes = [
    "reveal-text",
    variant === "words" ? "reveal-text--words" : "reveal-text--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <RevealBlock
      as={as}
      className={classes}
      delay={variant === "words" ? 0 : delay}
      variant={variant}
      {...rest}
    >
      {variant === "words" ? renderWords(text, delay, stagger) : text}
    </RevealBlock>
  );
}
