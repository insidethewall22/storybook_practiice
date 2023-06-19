import React from "react";

/** some description */
export type Props = {
  variant: "green" | "yellow" | "red";
  label?: "hello word" | "hello storybook";
};

/** some comment about my Light component */
const light = ({ variant = "green", label = "hello word" }: Props) => {
  return (
    <div
      style={{
        padding: 20,
        background: variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    >
      {label}
    </div>
  );
};

export default light;
