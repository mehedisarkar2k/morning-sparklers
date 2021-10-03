import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/banner.webp";

const Footer = () => {
  return (
    <div className="bg-purple-700 p-12 mt-24 relative bottom-0">
      <div className="w-3/4 mx-auto flex items-center justify-between">
        <div className="details">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <p className="text-white text-lg">
              Users and submit their own items. You can create different
              packages and by connecting with your PayPal or Stripe account
              charge users for registration.
            </p>

            <div className="icons mt-5 space-x-4 w-1/2">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
              <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
              <FontAwesomeIcon icon={faPinterest} size="lg" color="white" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
            </div>
          </div>
        </div>
        <div className=" quick-links w-1/2">
          <h3 className="text-white text-3xl">Quic Links</h3>

          <div className="flex flex-col">
            <Link
              className="text-white hover:text-pink-400 transition"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="text-white hover:text-pink-400 transition"
              to="/classes"
            >
              Classes
            </Link>
            <Link
              className="text-white hover:text-pink-400 transition"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-8 text-white text-xl">
        Copyright &copy; 2021 All rights reserved | This Site Developed by{" "}
        <span className="text-yellow-400">Mehedi Hasan Sarkar</span>
      </h3>
    </div>
  );
};

export default Footer;
