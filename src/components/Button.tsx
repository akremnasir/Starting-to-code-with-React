import React from "react";
interface props {
  children: string;
  onClick: () => void;
  color: string
}

const Button = ({ children, onClick, color }: props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
