import React, { useState } from "react";
import { useForm } from "@formspree/react";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("xbjvznoo");

  return (
    <section
      id="contactMe"
      className="w-full py-20 lg:pl-32 pl-3 flex-col border-b-2 border-yellow-400"
    >
      <div className="flex justify-center items-center text-center">
        <h1 className="text-3xl text-center sm:text-5xl text-gray-600 font-bold capitalize">
          Contact With Me
        </h1>
      </div>
      <div className="w-full  p-2 lg:p-10 lg:mt-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <ContactLeft />
          <div className="w-full lg:w-[60%] py-10 bg-gradient-to-r from-[#616060] to-[#1e1f22] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
      
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-400 uppercase tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="outline-designColor"
             
                  />
                  
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label
                    htmlFor="number"
                    className="text-sm text-gray-400 uppercase tracking-wide"
                  >
                    Phone Number
                  </label>
                  <input
                    id="number"
                    type="number"
                    name="number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className=
                      "outline-designColor"
                  
                  />
                  
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-400 uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className=
                    "outline-designColor"
            
                />
               
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="subject"
                  className="text-sm text-gray-400 uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className=
                    "outline-designColor"
              
                />
                
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-400 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="outline-designColor"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base
                  text-gray-400 tracking-wider uppercase hover:text-white
                  duration-300 hover:border-[1px] hover:border-designColor
                  border-transparent"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
