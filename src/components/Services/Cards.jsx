import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Cards = ({ icon, title, desc }) => {
  return (
    <div className="w-full h-82 px-12 py-10 shadow-shadowOne rounded-lg flex items-center bg-gradient-to-r from-gray-100 to-gray-200 group hover:bg-gradient-to-r hover:from-gray-100 hover:to-yellow-400 transition-colors duration-300 hover:transform hover:-translate-y-2 hover:transition-transform ease-in-out hover:duration-500">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-5xl text-yellow-500 pl-10">{icon}</span>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-titleFont font-bold text-gray-700">
            {title}
          </h2>
          <p className="text-base">{desc}</p>
          <span className="text-2xl text-yellow-500">
            <HiArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
