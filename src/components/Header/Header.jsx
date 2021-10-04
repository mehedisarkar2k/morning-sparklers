import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/banner.webp";
import Menu from "./Menu";

const Header = () => {
  return (
    <nav className="py-4  shadow-md">
      <div className="container container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src={Logo} alt="Kindergarten" />
        </NavLink>

        <Menu />
      </div>
    </nav>
  );
};

export default Header;
