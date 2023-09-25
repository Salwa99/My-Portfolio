import React from 'react'
import { FaGithub, FaLinkedin, FaAngellist, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="p-2 lg:p-4 bg-gray-600 shadowO">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-lg text-gray-100 sm:text-center">
          © 2023{" "}
          <a href="#" class="hover:underline">
            Salwa Ballouti™
          </a>
          . All Rights Reserved.
        </span>
        <div class="flex gap-4 items-center mt-3 text-2xl font-medium sm:mt-0">
            <a
              href="#"
              class="text-gray-100 hover:text-yellow-500"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              class="text-gray-100 hover:text-yellow-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              class="text-gray-100 hover:text-yellow-500"
            >
              <FaMedium />
            </a>
            <a
              href="#"
              class="text-gray-100 hover:text-yellow-500"
            >
              <FaAngellist />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer