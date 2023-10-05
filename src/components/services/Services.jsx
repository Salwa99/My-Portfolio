import React, { useEffect } from "react";
import Cards from "./Cards";
import { MdDeveloperMode, MdScreenshotMonitor } from "react-icons/md";
import { BsFillDatabaseFill } from "react-icons/bs";
import { AiOutlineCloudServer, AiTwotoneApi } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cards = [
    {
      icon: <MdDeveloperMode />,
      title: "End-to-End Development",
      desc: "Creating complete web applications or software products in both front-end and back-end.",
    },
    {
      icon: <MdScreenshotMonitor />,
      title: "UI and Responsiveness",
      desc: "Designing and developing user-friendly and visually appealing interfaces using technologies like HTML, CSS, and JavaScript, React.",
    },
    {
      icon: <AiTwotoneApi />,
      title: "API Development",
      desc: "Creating RESTful APIs to enable communication between the front-end and back-end of applications.",
    },
    {
      icon: <BsFillDatabaseFill />,
      title: "Database Integration",
      desc: "Working with databases, both relational and NoSQL, to store and retrieve data efficiently.",
    },
    {
      icon: <AiOutlineCloudServer />,
      title: "Deployment and Hosting",
      desc: "Deploying applications to servers or cloud platforms, ensuring they are accessible to users.",
    },
    {
      icon: <VscDebugConsole />,
      title: "Quality Assurance",
      desc: "Ensuring the quality of the software through testing, debugging, and continuous integration to deliver a reliable product.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="w-full h-auto lg:h-[1200px] py-20 lg:pl-32 pl-3 flex-col border-b-2 border-yellow-400"
    >
      <div className="flex flex-col mb-14 gap-4 font-titleFont">
        <h3 className="text-lg uppercase font-bold text-yellow-500 tracking-wide">
          Services
        </h3>
        <h1 className="text-3xl sm:text-5xl text-gray-600 font-bold capitalize">
          I specialize in
        </h1>
      </div>

      <div className="grid grid-rows-3 lg:grid-cols-3 md:grid-cols-2 gap-8 pr-3 lg:pr-20">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={ref}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={controls}
            >
              <Cards icon={card.icon} title={card.title} desc={card.desc} />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
