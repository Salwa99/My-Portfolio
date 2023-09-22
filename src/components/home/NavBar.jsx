import React, { useState } from "react";
import picture from "../../assets/images/pic.jpeg"
import {navBarLinks} from "../../data/index"
import { Link } from "react-scroll";

const NavBar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-yellow-400 border-b-[1px] border-b-gray-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-4">
          <img
            class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={picture}
            alt="my picture"
          />
          <span className=" text-2xl font-semibold dark:text-gray-700">
            Salwa Ballouti
          </span>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
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
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            
            {navBarLinks.map(({_id, title, link}) => (
              <li key={_id}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0 text-gray-700 hover:underline"
                >
                 <Link activeClass="active" to={link} spy={true} offset={-70} duration={500}>{title}</Link> 
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
