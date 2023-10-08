import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import picture from "../../assets/images/pic.jpeg";
import { navBarLinks } from "../../data/index";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="shadow-shadowNavBar bg-[#F2C832] sticky top-0 z-50 border-b-[1px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={picture}
            alt="my picture"
          />
          <span className="text-2xl font-semibold dark:text-gray-700">
            Salwa Ballouti
          </span>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <FaWindowClose className="w-10 h-10 text-gray-800" />
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            {navBarLinks.map(({ _id, title, link }) => (
              <li key={_id}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0 text-[#313131] hover:underline hover:text-gray-100 text-[1rem]"
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    offset={-70}
                    duration={1500}
                    onClick={closeMenu}
                  >
                    {title}
                  </Link>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
