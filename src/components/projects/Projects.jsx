import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 lg:pl-32 pl-3 flex-col border-b-2 border-yellow-400"
    >
      <div className="mb-14 font-titleFont">
        <h1 className="text-3xl text-center sm:text-5xl text-gray-600 font-bold capitalize">
          My projects
        </h1>
        <h2 className="text-center text-yellow-600 py-6">
          Check my GitHub for more
        </h2>
      </div>

      <div>
        <Cards />
      </div>
    </section>
  );
};
export default Projects;
