import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#F7A582] rounded-md duration-200 text-white hover:bg-[#eb8f68] py-[13px] px-[28px] font-semibold">
      {children}
    </button>
  );
};

export default Button;
