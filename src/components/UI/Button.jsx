import React from "react";

const Button = ({ children, classAdd }) => {
  return (
    <button
      className={`bg-[#f25f3a] py-4 px-6 rounded-full text-white ${classAdd}`}
    >
      {children}
    </button>
  );
};

export default Button;
