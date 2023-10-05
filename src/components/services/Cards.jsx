import React from "react";

const Cards = ({ icon, title, desc }) => {
  return (
    <div className="w-full h-82 px-12 py-10 shadow-shadowOne rounded-lg flex items-center bg-[#000026] group hover:transform hover:-translate-y-2 hover:transition-transform ease-in-out hover:duration-500">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-6xl text-yellow-500 pl-10">{icon}</span>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-titleFont font-bold text-gray-400">
            {title}
          </h2>
          <p className="text-base text-gray-100">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
