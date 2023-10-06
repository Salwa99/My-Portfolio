import React, { useState } from "react";
import { useForm } from "@formspree/react";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, handleSubmit] = useForm("xbjvznoo");

  const handleSend = async (e) => {
    e.preventDefault();

    // Perform field validation
    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg("All fields are required!");
      return;
    }

    setErrMsg("");
    setIsSubmitting(true);

    try {
      const formData = {
        name: username,
        phone: phoneNumber,
        email,
        subject,
        message,
      };

      const response = await fetch("https://formspree.io/f/xbjvznoo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setErrMsg("");
        setIsSubmitting(false);
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setIsSubmitting(false);
        setErrMsg("Error sending the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      setIsSubmitting(false);
      setErrMsg("Error sending the message. Please try again later.");
    }
  };

  return (
    <section
      id="contactMe"
      className="w-full py-20 lg:pl-32 pl-3 flex-col shadow-shadowNavBar"
    >
      <div className="flex justify-center items-center text-center">
        <h1 className="text-3xl text-center sm:text-5xl text-gray-600 font-bold capitalize">
          Contact With Me
        </h1>
      </div>
      <div className="w-full p-2 lg:p-10 lg:mt-10">
        <div className="flex flex-col lg:flex-row lg:h-[900px] gap-4">
          <ContactLeft />
          <div className="w-full lg:w-2/3 p-4 lg:p-10 bg-[#000026] flex flex-col gap-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lg:gap-6"
            >
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="name"
                  className="text-sm lg:text-lg text-gray-200 uppercase tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="p-2 rounded lg:w-[800px] outline-yellow-400"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="phone"
                  className="text-sm lg:text-lg text-gray-200 uppercase tracking-wide"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className="p-2 rounded lg:w-[800px] outline-yellow-400"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label
                  htmlFor="email"
                  className="text-sm lg:text-lg text-gray-200 uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="p-2 rounded lg:w-[800px] outline-yellow-400"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="subject"
                  className="text-sm lg:text-lg text-gray-200 uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="p-2 rounded lg:w-[800px] outline-yellow-400"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="message"
                  className="text-sm lg:text-lg text-gray-200 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="p-4 rounded lg:w-[800px] outline-yellow-400"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>

              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {isSubmitting && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  Submitting...
                </p>
              )}

              <div className="w-full flex items-center justify-center mt-4">
                <button
                  type="submit"
                  disabled={state.submitting || isSubmitting}
                  className="h-12  p-6 lg:mr-[80px] bg-[#ffffff] rounded-lg text-center flex items-center justify-center
                  text-gray-800 tracking-wider uppercase hover:text-white hover:bg-yellow-500
                  duration-300 hover:border-[1px] border-2 border-gray-900"
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
