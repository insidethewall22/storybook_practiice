import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  base: {
    // fontFamily: "fontFamily-sans",
  },
  variants: {
    variant: {
      h1: {
        // fontSize: "fontSize-4x1",
      },
      h2: {
        // fontSize: "fontSize-3x1",
      },
      h3: {
        // fontSize: "fontSize-2x1",
      },
      span: {
        // color: "colors-accent",
        // fontSize: "fontSize-lg",
      },
      h4: {},
      h5: {},
      p: {},
      figcaption: {},
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});
export type TextVariants = RecipeVariants<typeof textStyle>;
