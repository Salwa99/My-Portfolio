import React, { useState } from "react";
import { ProjectsData } from "../../data/projectsData";
import Modal from "./Modal";
import { motion } from "framer-motion";

const Cards = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((data) => (
          <motion.div
            key={data._id}
            className="w-full h-auto shadow-shadowOne flex flex-col bg-[#000026] group relative overflow-hidden rounded-lg group transform hover:-translate-y-2 transition-transform duration-300"
            whileHover={{
              scale: 1.07, 
              rotate: [2, 6, -8, -2],
              transition: { duration: 0.4 },
            }}
          >
            <div className="h-45 lg:h-70 bg-center bg-cover">
              <img src={data.src} alt="project image" />
            </div>
            <div className="px-6 py-4">
              <h2 className="title text-xl font-extrabold text-gray-300 uppercase mb-2 relative">
                {data.title}
                <span className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-5 bg-no-repeat bg-top"></span>
              </h2>

              <motion.h3
                className="p-3 w-[150px] font-bold uppercase text-yellow-600 border-2 border-gray-300 rounded-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }} 
              >
                <button onClick={() => openModal(data)}>See My Project</button>
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Cards;
