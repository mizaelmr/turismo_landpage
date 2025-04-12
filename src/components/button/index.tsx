import React, { Children, ReactNode } from "react";

// import { Container } from './styles';
interface iButton {
  children: ReactNode;
  id?: string;
}
const ButtonComponent: React.FC<iButton> = ({ children, id }) => {
  return (
    <button
      className="absolute right-0 bottom-6 p-2 inline-flex text-[#104398] focus:outline-none"
      id={id}
      type="button"
      aria-expanded="false"
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
