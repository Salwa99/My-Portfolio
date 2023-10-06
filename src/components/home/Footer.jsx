import React from 'react'
import { FaGithub, FaLinkedin, FaAngellist, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 lg:p-8 bg-[#000026]">
      <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
        <span className="text-lg text-gray-100  sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Salwa Ballouti™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex gap-4 items-center mt-3 text-2xl font-medium sm:mt-0 text-gray-100">
          <a
            href="https://github.com/Salwa99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/salwa-ballouti/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@salwa.ballouti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaMedium />
          </a>
          <a
            href="https://wellfound.com/u/salwa-ballouti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaAngellist />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer