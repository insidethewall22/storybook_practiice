import React from "react";

export const withMaxWidth = (StoryFn, context) => {
  console.log(context);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        // border: "2px solid black",
        // borderRadius: "15px",
      }}
    >
      <StoryFn />
    </div>
  );
};
