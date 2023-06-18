import { ReactNode, createElement, forwardRef } from "react";
// import { textStyle } from "./Text.css";

export const elementTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "p",
  "span",
  "figcaption",
] as const;

export type TextProps = {
  children?: ReactNode;
  as?: (typeof elementTags)[number];
};

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = "span", children, ...props }, ref) => {
    if (!elementTags.includes(as)) {
      console.log(`${as} is not a supported element tag`);
    }
    return createElement(
      as,
      {
        ref,
        // className: textStyle({ variant: as }),
        ...props,
      },
      children
    );
  }
);
