import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaAngellist, FaMedium } from "react-icons/fa";
import image from "../../assets/19879462_6174096.svg";
import { motion } from "framer-motion";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1HTvmlZHjhURkVf9MzYfQutBmpWtGfJQB/view?usp=sharing",
      "_blank"
    );
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    hover: { scale: 1.1 },
  };

  const imageVariants = {
    visible: {
      y: [0, 10, 0],
      opacity: 1,
      transition: { repeat: Infinity, duration: 3 },
    },
  };

  return (
    <section
      id="aboutMe"
      className="w-full flex flex-col lg:flex-row gap-10 py-20 lg:pl-32 pl-3 pr-4 font-titleFont shadow-shadowNavBar"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal text-gray-700">
            WELCOME TO MY PORTFOLIO!
          </h4>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-600">
            Hi, I'm
            <span className="text-yellow-400 capitalize"> salwa ballouti</span>
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-400">
            a<span> {text} </span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#FFD700"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="text-base lg:text-lg font-bodyFont text-gray-600 leading-6 tracking-wide"
          >
            Greetings! I'm a dedicated software engineer who loves turning your
            ideas into reality. Check out my portfolio for successful projects,
            and if you have a coding project in mind, reach out! Let's bring
            your visions to life!
          </motion.p>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-700">
            Find me in
          </h2>
          <motion.div
            className="flex gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.span
              className="icons"
              variants={iconVariants}
              whileHover="hover"
            >
              <a
                href="https://github.com/Salwa99"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </motion.span>
            <motion.span
              className="icons"
              variants={iconVariants}
              whileHover="hover"
            >
              <a
                href="https://www.linkedin.com/in/salwa-ballouti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </motion.span>
            <motion.span
              className="icons"
              variants={iconVariants}
              whileHover="hover"
            >
              <a
                href="https://wellfound.com/u/salwa-ballouti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaAngellist />
              </a>
            </motion.span>
            <motion.span
              className="icons"
              variants={iconVariants}
              whileHover="hover"
            >
              <a
                href="https://medium.com/@salwa.ballouti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium />
              </a>
            </motion.span>
            <motion.button
              className="btn text-sm lg:text-lg "
              onClick={openResume}
              variants={iconVariants}
              whileHover="hover"
            >
              Get my resume
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={image}
            className="w-[600px] h-[auto] z-10"
            alt="banner-pic"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
