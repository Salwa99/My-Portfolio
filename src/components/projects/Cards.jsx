import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { ProjectsData } from "../../data/projectsData";

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((data) => (
          <div
            key={data._id}
            className="w-full h-auto shadow-shadowOne flex flex-col bg-gradient-to-r from-[#f2f6fa]  to-[#8e9092] group hover:bg-gradient-to-b hover:from-yellow-200 hover:yellow-400 relative overflow-hidden bg-white rounded-lg group transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-45 lg:h-60 bg-center bg-cover">
              <img src={data.src} alt="project image" />
            </div>
            <div className="px-6 py-4">
              <h2 className="title text-xl font-extrabold text-gray-800 uppercase mb-2 relative">
                {data.title}
                <span className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-5 bg-no-repeat bg-top"></span>
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {data.description}
              </p>
              <h3 className="text-4xl flex gap-4 uppercase text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={data.live} target="_blank" rel="noopener noreferrer">
                  <GoLinkExternal />
                </a>{" "}
                <a href={data.repo} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
