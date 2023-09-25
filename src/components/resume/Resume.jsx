import React from 'react'

const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full py-20 lg:pl-32 pl-3 pr-4 font-titleFont border-b-2 border-yellow-400"
    >
      <h1 className="text-3xl text-center sm:text-5xl text-gray-600 font-bold capitalize">
        My Resume
      </h1>

      <div>
        <ul>
          <li>Education</li>
          <li>Professional Skills</li>
          <li>Experience</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume