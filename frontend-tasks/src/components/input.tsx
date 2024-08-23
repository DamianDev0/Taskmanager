import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  type?: string; // Agrega la propiedad type
}

export const InputComponent: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "Username",
  id,
  type = "text" // Incluye la propiedad type
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-purple-400 outline-none rounded-lg p-3 shadow-inner transition-transform duration-300 ease-in-out text-black placeholder-black bg-white focus:bg-zinc-800 focus:text-white focus:placeholder-white focus:scale-105 focus:shadow-[13px_13px_100px_#969696,_-13px_-13px_100px_#ffffff]"
    />
  );
};
