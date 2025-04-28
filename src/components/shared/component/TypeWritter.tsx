"use client";
import { TypeAnimation } from "react-type-animation";

interface TypeWritterProps {
  children: string;
}

const TypeWritter = ({ children }: TypeWritterProps) => {
  return (
    <TypeAnimation
      sequence={[
        children,
        2000,
        "",
        500,
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={70}
      style={{ fontSize: "inherit", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeWritter;
