import React from "react";

import { useSelector } from "react-redux";

export const Button = ({ children, onClick, className }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <button
      className={`${className} ${
        theme === "light"
          ? "bg-slate-900 bg-opacity-5 "
          : "bg-gray-100 bg-opacity-5"
      } ${
        theme === "light"
          ? "hover:bg-slate-900 hover:bg-opacity-10"
          : "hover:bg-gray-100 hover:bg-opacity-10"
      }
      p-2 rounded-full block w-full duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
