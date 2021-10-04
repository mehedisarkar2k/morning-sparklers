import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/banner.webp";

const Header = () => {
  return (
    <nav className="py-4  shadow-md">
      <ul className="container mx-auto flex items-center text-purple-800 font-bold text-lg">
        <li>
          <NavLink to="/">
            <img src={Logo} alt="Kindergarten" />
          </NavLink>
        </li>

        <li className="ml-auto px-3 py-2 mx-2">
          <NavLink
            activeClassName="text-pink-500 border-b-2 border-pink-500"
            className="transition duration-150 hover:text-pink-500"
            to="/home"
          >
            Home
          </NavLink>
        </li>

        <li className=" px-3 py-2 mx-2">
          <NavLink
            activeClassName="text-pink-500 border-b-2 border-pink-500"
            className="transition duration-150 hover:text-pink-500"
            to="/services"
          >
            Services
          </NavLink>
        </li>

        <li className=" px-3 py-2 mx-2">
          <NavLink
            activeClassName="text-pink-500 border-b-2 border-pink-500"
            className="transition duration-150 hover:text-pink-500"
            to="/news"
          >
            News
          </NavLink>
        </li>

        <li className=" px-3 py-2 mx-2">
          <NavLink
            activeClassName="text-pink-500 border-b-2 border-pink-500"
            className="transition duration-150 hover:text-pink-500"
            to="/about"
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/enroll">
            <button className="px-4 py-2 rounded-3xl font-bold text-lg tracking-wider bg-purple-700 text-white tra duration-200 hover:bg-purple-600 hover:shadow-md">
              Enroll Now
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
