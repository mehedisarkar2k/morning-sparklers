import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [menuState, setMenuState] = useState(false);

  const hamburgerClick = () => {
    setMenuState(!menuState);
    console.log(menuState);
  };

  const menuClasses = `md:ml-auto hidden md:flex flex-col md:flex-row text-purple-800 font-bold text-lg`;
  return (
    <>
      <FontAwesomeIcon
        className="block md:hidden z-50"
        onClick={hamburgerClick}
        cursor="pointer"
        icon={faBars}
        color="rgba(236, 72, 153)"
        size="2x"
      />
      <ul className={menuClasses}>
        <li className=" px-3 py-2 mx-2">
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
              Enrolled Courses
            </button>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Menu;
