import { FC, useRef } from "react";
import { useRender } from "./store";

const Render: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return <div id="render" ref={ref}></div>;
};

export default Render;
