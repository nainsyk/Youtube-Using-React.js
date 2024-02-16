import React from "react";

const Button = ({ name }) => {
  return (
    <div className="mt-2">
        <button className="px-4 py-1 m-2 bg-gray-200 rounded-lg text-black font-semibold text-md">{name}</button>
    </div>
  )
};

export default Button;