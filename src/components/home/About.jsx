import React from 'react'
import {  Cursor, useTypewriter } from 'react-simple-typewriter';
import image from '../../assets/19879462_6174096.svg'

const About = () => {

  const [text] = useTypewriter ({
    words: ["Software Engineer", "Full Stack Devloper", "Front End Developer", "Back End Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  });

  return (
    <section
      id="aboutMe"
      className="w-full py-20 pl-32 font-titleFont border-b-2 border-yellow-400"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal text-gray-700">
            WELCOME TO MY PORTFOLIO!
          </h4>
          <h1 className="text-6xl font-bold text-gray-600">
            {" "}
            Hi, I'm
            <span className="text-yellow-400 capitalize"> salwa ballouti</span>
          </h1>
          <h2 className="text-4xl font-bold text-gray-400">
            a<span> {text} </span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#FFD700"
            />
          </h2>
          <p className="text-base font-bodyFont text-gray-600 leading-6 tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima hic
            blanditiis harum. sit amet consectetur, adipisicing elit. Minima hic
            blanditiis harum. sit amet consectetur, adipisicing elit. Minima hic
            blanditiis harum.
          </p>
        </div>
      </div>

      <div className="w-1/2">
        <img src={image} className="sm:w-[40%] " />
      </div>
    </section>
  );
}

export default About