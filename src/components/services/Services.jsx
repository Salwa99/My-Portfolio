import React from 'react'
import Cards from './Cards';
import { MdDeveloperMode, MdScreenshotMonitor } from "react-icons/md";
import { BsFillDatabaseFill } from "react-icons/bs";
import { AiOutlineCloudServer, AiTwotoneApi } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";


const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20 lg:pl-32 pl-3 flex-col border-b-2 border-yellow-400"
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
        <Cards
          icon={<MdDeveloperMode />}
          title="End-to-End Development"
          desc=" Creating complete web applications or software products in both front-end and back-end."
        />
        <Cards
          icon={<MdScreenshotMonitor />}
          title="UI and Responsiveness"
          desc=" Designing and developing user-friendly and visually appealing interfaces using technologies like HTML, CSS, and JavaScript, React."
        />
        <Cards
          icon={<AiTwotoneApi />}
          title="API Development"
          desc=" Creating RESTful APIs to enable communication between the front-end and back-end of applications."
        />
        <Cards
          icon={<BsFillDatabaseFill />}
          title="Database Integration"
          desc=" Working with databases, both relational and NoSQL, to store and retrieve data efficiently."
        />
        <Cards
          icon={<AiOutlineCloudServer />}
          title="Deployment and Hosting"
          desc=" Deploying applications to servers or cloud platforms, ensuring they are accessible to users."
        />
        <Cards
          icon={<VscDebugConsole />}
          title="Quality Assurance"
          desc=" Ensuring the quality of the software through testing, debugging, and continuous integration to deliver a reliable product."
        />
      </div>
    </section>
  );
}

export default Services