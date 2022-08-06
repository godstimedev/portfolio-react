import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className="h-[10%] max-w-[300px]  max-h-full m-auto grid place-items-center ">
      <div className="container flex justify-between items-center ">
        <a
          href="https://linkedin.com/in/godstime-agholor-2939a81a4"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            size={30}
            className="text-white hover:text-[#0096d3] transition ease-in duration-200"
          />
        </a>
        <a
          href="https://twitter.com/_Godstimee"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter
            size={30}
            className="text-white hover:text-[#0096d3] transition ease-in duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/_gteee/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            size={30}
            className="text-white hover:text-[#0096d3] transition ease-in duration-200"
          />
        </a>
        <a
          href="https://github.com/godstimedev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" px-4 py-2  text-[#333]  rounded-md bg-white hover:opacity-80 hover:border-none transition ease-in duration-200">
            GitHub
          </button>
        </a>
      </div>
    </section>
  );
}

export default Footer;
