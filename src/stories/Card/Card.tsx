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
