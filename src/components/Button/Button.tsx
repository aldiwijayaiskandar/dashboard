import React from "react";

interface ButtonProps {
  onClick: Function;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return <button onClick={() => props.onClick}>{props.text}</button>;
};
