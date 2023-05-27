import React from "react";
import logo from "../../assets/logoWhite.png";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className=" bg-[#07332F] pt-5">
      <nav className="my-container flex justify-between items-center">
        <img src={logo} className="w-36 z-10" alt="" />
        <ul className="flex gap-5 items-center text-white font-medium">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/appointment"}>Appointment</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
