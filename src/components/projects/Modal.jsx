import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="w-full fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-md p-4 w-full md:w-[700px]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
        <button
          className="absolute top-12 right-2 lg:right-12 text-4xl lg:text-6xl text-gray-900 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="h-45 lg:h-70 bg-center bg-cover">
          <img src={project.src} alt="project image" />
        </div>
        <h2 className="text-xl font-extrabold text-gray-800 uppercase mb-2">
          {project.title}
        </h2>
        <p className="text-sm text-gray-800 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <GoLinkExternal className="mr-1" /> Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <AiFillGithub className="mr-1" /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
