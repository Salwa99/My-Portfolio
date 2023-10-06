import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 lg:pl-32 pl-3 flex-col shadow-shadowNavBar"
    >
      <div className="mb-14 font-titleFont">
        <h1 className="text-3xl text-center sm:text-5xl text-gray-600 font-bold capitalize">
          My projects
        </h1>
        <h2 className="text-center text-yellow-600 py-6">
          Check{" "}
          <a
            href="https://github.com/Salwa99"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-bold"
          >
            my GitHub
          </a>{" "}
          for more
        </h2>
      </div>

      <div className="pr-2 lg:pr-20">
        <Cards />
      </div>
    </section>
  );
};
export default Projects;
