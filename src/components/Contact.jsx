import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <section className="h-[calc(100vh-5rem)] bg-gradient-to-b from-[#2a2a2e] to-[#313133] py-6">
      <h1 className="text-[#424245] py-3 text-center text-6xl font-bold ">
        Contact Me.
      </h1>
      <div className="max-w-[360px] mx-auto mt-10 border-t border-[#0096d3]">
        <div className="w-full flex justify-between items-center gap-4">
          <div>
            <AiOutlineMail size={25} className="text-[#0096d3]" />
          </div>
          <div>
            <a href="mailto:agholorgodstime18@gmail.com">
              agholorgodstime18@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
