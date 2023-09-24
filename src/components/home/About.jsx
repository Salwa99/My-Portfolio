import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaAngellist, FaMedium } from "react-icons/fa";
import image from "../../assets/19879462_6174096.svg";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="aboutMe"
      className="w-full flex flex-col lg:flex-row gap-10 py-20 lg:pl-32 pl-3 pr-4 font-titleFont border-b-2 border-yellow-400"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal text-gray-700">
            WELCOME TO MY PORTFOLIO!
          </h4>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-600">
            Hi, I'm
            <span className="text-yellow-400 capitalize"> salwa ballouti</span>
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-400">
            a<span> {text} </span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#FFD700"
            />
          </h2>
          <p className="text-base lg:text-lg font-bodyFont text-gray-600 leading-6 tracking-wide">
            Greetings! I'm a dedicated software engineer who loves turning your
            ideas into reality. Check out my portfolio for successful projects,
            and if you have a coding project in mind, reach out! Let's bring
            your visions to life!
          </p>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-700">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="icons">
              <FaGithub />
            </span>
            <span className="icons">
              <FaLinkedin />
            </span>
            <span className="icons">
              <FaAngellist />
            </span>
            <span className="icons">
              <FaMedium />
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={image}
          className="w-[600px] h-[auto] z-10"
          alt="banner-pic"
        />
      </div>
    </section>
  );
};

export default About;
