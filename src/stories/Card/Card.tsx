import React from "react";
import { ReactNode } from "react";

export type Props = {
  type: "default" | "light";
  body?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};
const layoutSize = (header: ReactNode, footer: ReactNode) => {
  if (header && footer) return 800;
  else if (footer) return 125;
  else return 90;
};
// Can you add some box-shadow to give the card the feeling of lifting off the page
const Card = ({ type = "default", body, header, footer }: Props) => {
  return (
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
      }}
    >
      {header}
      <span>{body}</span>
      {footer && <span>{footer}</span>}
    </div>
  );
};
export default Card;
