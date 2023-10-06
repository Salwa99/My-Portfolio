import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import contactImg from "../../assets/contactUs.svg";

const ContactLeft = () => {
  return (
    <div className="bg-[#000026] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <motion.div
        className="object-cover rounded-lg m-8"
        animate={{
          y: [0, 10, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
      >
        <img src={contactImg} alt="contact image" />
      </motion.div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-3xl font-bold text-gray-200">Salwa Ballouti</h3>
        <p className="text-lg font-normal text-gray-100">
          Full-Stack Web Developer
        </p>
        <p className="text-base text-gray-100 tracking-wide">
          Feel free to reach out using the information below. I look forward to
          hearing from you!
        </p>
        <p className="text-base text-gray-100 flex items-center gap-2 underline font-bold">
          Email: <span className="text-lightText">s.ritage99@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
