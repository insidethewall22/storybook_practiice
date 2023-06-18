import { ReactNode } from "react";
import { useState } from "react";

export type Props = {
  name?: ReactNode;
  test?: string;
};
const Pokemon = ({ name }: Props) => {
  const [x, setX] = useState<string>("test");
  return (
    <>
      {name}
      <p>{x}</p>
    </>
  );
};

export default Pokemon;
