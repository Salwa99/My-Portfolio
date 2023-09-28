import React from "react";
import contactImg from "../../assets/contactUs.svg";

const ContactLeft = () => {
  return (
    <div className="bg-gradient-to-r from-[#2a2c30] to-[#5e5e5d] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="object-cover rounded-lg m-4"
        src={contactImg}
        alt="contact image"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Salwa Ballouti</h3>
        <p className="text-lg font-normal text-gray-100">
          Full-Stack Web Developer
        </p>
        <p className="text-base text-gray-100 tracking-wide">
          Feel free to reach out using the information below. I look forward to
          hearing from you!
        </p>
        <p className="text-base text-gray-100 flex items-center gap-2 underline font-bold">
          Phone: <span className="text-lightText">+212645037706</span>
        </p>
        <p className="text-base text-gray-100 flex items-center gap-2 underline font-bold">
          Email: <span className="text-lightText">s.ritage99@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
