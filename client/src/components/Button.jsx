import React from "react";

const Button = ({ text, design }) => {
  return <button className={`${design}`}>{text}</button>;
};

export default Button;