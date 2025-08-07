import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, id, className = '', onClick }) => {
  return (
    <button
      className={`p-2 inline-flex items-center justify-center text-[#104398] hover:text-[#006A33] focus:outline-none focus:ring-2 focus:ring-[#104398] focus:ring-offset-2 transition-colors duration-200 ${className}`}
      id={id}
      type="button"
      onClick={onClick}
      aria-expanded="false"
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
