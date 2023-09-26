import React from 'react'
import Card from './Card';

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 lg:pl-32 pl-3 pr-4 font-titleFont border-b-2 border-yellow-400"
    >
      <h1 className="text-3xl text-center sm:text-5xl text-gray-600 font-bold capitalize">
        Technologies I use
      </h1>

      <div>
        <ul className="w-full grid grid-cols-3  ">
          <li className="resumeLi">Front-End</li>
          <li className="resumeLi">Back-End</li>
          <li className="resumeLi">Tools</li>
        </ul>
      </div>

      <div>
        <Card />
      </div>
    </section>
  );
}

export default Skills