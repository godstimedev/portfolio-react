import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Footer from "./Footer";

function Contact() {
  return (
    <section className="h-[calc(100vh-5rem)] bg-gradient-to-b from-[#2a2a2e] to-[#313133] py-6">
      <h1 className="text-[#424245] py-3 text-center text-6xl font-bold ">
        Contact.
      </h1>
      <div className="max-w-[360px] mx-auto mt-10 border-t border-[#0096d3] px-2">
        <div className="w-full flex  items-center gap-[3rem] py-4 px-3">
          <div className="py-4 px-3 bg-[#2a2a2e] rounded-md shadow-inner">
            <AiOutlineMail size={20} className="text-[#0096d3]" />
          </div>
          <div>
            <p className="text-sm  text-[#82828b]">EMAIL</p>
            <a
              href="mailto:agholorgodstime18@gmail.com"
              className="text-white hover:underline hover:underline-offset-4"
            >
              agholorgodstime18@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full flex items-center gap-[3rem] py-4 px-3">
          <div className="py-4 px-3 bg-[#2a2a2e] rounded-md shadow-inner">
            <FaPhoneAlt size={20} className="text-[#0096d3]" />
          </div>
          <div>
            <p className="text-sm  text-[#82828b]">PHONE</p>
            <a
              href="tel:+2348103904589"
              className="text-white hover:underline hover:underline-offset-4"
            >
              +(234)8103904589
            </a>
          </div>
        </div>
        <div className="w-full flex items-center gap-[3rem] py-4 px-3">
          <div className="py-4 px-3 bg-[#2a2a2e] rounded-md shadow-inner">
            <GoLocation size={20} className="text-[#0096d3]" />
          </div>
          <div>
            <p className="text-sm  text-[#82828b]">LOCATION</p>
            <p className="text-white ">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="mt-[3rem]">
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
