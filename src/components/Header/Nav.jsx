import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/banner.webp";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="list-none py-2 text-purple-800 font-bold text-lg  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img src={Logo} alt="Kindergarten" />
              </NavLink>
            </div>

            <div className="ml-auto hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
                    <button className="px-4 py-1 rounded-3xl font-bold text-lg tracking-wider bg-purple-700 text-white tra duration-200 hover:bg-purple-600 hover:shadow-md">
                      Enrolled Courses
                    </button>
                  </NavLink>
                </li>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-purple-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-50 hover:bg-purple-900 focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref-setter={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                  <button className="px-4 py-1 rounded-3xl font-bold text-lg tracking-wider bg-purple-700 text-white tra duration-200 hover:bg-purple-600 hover:shadow-md">
                    Enrolled Courses
                  </button>
                </NavLink>
              </li>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
