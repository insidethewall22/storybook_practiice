import { style } from "@vanilla-extract/css";

export const cardStyle = style([
  {
    padding: 10,
    // height: layoutSize(header, footer),
    // width: "100 vw",
    display: "flex",
    flexDirection: "column",
    border: "2px solid black",
    borderRadius: "15px",
    boxShadow: "5px 5px 7px 10px rgba(0,0,0,.3)",
  },
]);
