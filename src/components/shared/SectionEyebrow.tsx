"use client";

import type { ReactNode } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";

type SectionEyebrowProps = {
  children: ReactNode;
  delay?: number;
};

export function SectionEyebrow({ children, delay = 0 }: SectionEyebrowProps) {
  return (
    <RevealBlock
      as="p"
      className="section-eyebrow"
      delay={delay}
      variant="eyebrow"
    >
      {children}
    </RevealBlock>
  );
}
