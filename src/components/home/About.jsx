import React from 'react'
import image from '../../assets/19879462_6174096.svg'

const About = () => {
  return (
    <section
      id="aboutMe"
      className="w-full pt-10 pb-30 border-b-2 border-yellow-400"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO!</h4>
          <h1 className="text-6xl font-bold text-gray-600">
            {" "}
            Hi, I'm
            <span className="text-yellow-400 capitalize"> salwa ballouti</span>
          </h1>
          <h2 className="text-4xl font-bold text-yellow-400">
            a<span> front-end developer</span>
          </h2>
          <p className="text-base font-bodyFont text-gray-500 leading-6 tracking-wide">
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