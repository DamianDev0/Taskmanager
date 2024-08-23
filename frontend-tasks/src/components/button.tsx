import React from "react";

interface ButtonProps {
  name: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="relative cursor-pointer border-none rounded-md 
     px-4 py-2 text-white bg-[#9c27b0] shadow-[0px_6px_0px_rgba(75,_0,_130,_0.8)]
      transition-all duration-300 ease-in-out hover:shadow-[0px_4px_0px_rgba(75,_0,_130,_0.8)] active:translate-y-[2px] active:shadow-none">
      {name}
    </button>
  );
};
