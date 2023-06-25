import React from "react";
import { ReactNode } from "react";
import { Text } from "../Text/Text";
// import { cardStyle } from "./Card.css";

export type Props = {
  type: "default" | "light";
  body?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  error?: boolean;
  errorContent?: string;
  loading?: boolean;
};

const Card = ({
  type = "default",
  body,
  header,
  footer,
  error,
  errorContent,
  loading,
}: Props) => {
  // loading component does not work even though loading value has been passed to card from useFetch and InfiniteFetch
  console.log(loading);

  if (!error) {
    return !loading ? (
      <div
        // try to use vanilla-extract but failed due to config issue; tried to add config code into the ./.storybook/main.js but does not work
        // className={cardStyle}
        style={{
          background: type == "default" ? "white" : "grey",
          padding: 10,

          // height: layoutSize(header, footer),
          // width: "100 vw",
          display: "flex",
          flexDirection: "column",
          border: "2px solid black",
          borderRadius: "15px",
          boxShadow: "5px 5px 7px 10px rgba(0,0,0,.3)",
        }}
      >
        {header}
        <span>{body}</span>
        {footer && <span>{footer}</span>}
      </div>
    ) : (
      <div
        style={{
          padding: 10,
          background: type == "default" ? "white" : "grey",
          // height: layoutSize(header, footer),
          // width: "100 vw",
          display: "flex",
          flexDirection: "column",
          border: "2px solid black",
          borderRadius: "15px",
          boxShadow: "5px 5px 7px 10px rgba(0,0,0,.3)",
        }}
      >
        <Text as="h4" children="Loading..."></Text>
      </div>
    );
  } else {
    return !loading ? (
      <div
        style={{
          padding: 10,
          background: type == "default" ? "white" : "grey",
          // height: layoutSize(header, footer),
          // width: "100 vw",
          color: "red",
          display: "flex",
          flexDirection: "column",
          border: "2px solid black",
          borderRadius: "15px",
          boxShadow: "5px 5px 7px 10px rgba(0,0,0,.3)",
        }}
      >
        <Text as="h4" children={errorContent}></Text>
      </div>
    ) : (
      <div
        style={{
          padding: 10,
          background: type == "default" ? "white" : "grey",
          // height: layoutSize(header, footer),
          // width: "100 vw",
          display: "flex",
          flexDirection: "column",
          border: "2px solid black",
          borderRadius: "15px",
          boxShadow: "5px 5px 7px 10px rgba(0,0,0,.3)",
        }}
      >
        <Text as="h4" children="Loading..."></Text>
      </div>
    );
  }
};
export default Card;
