import React from "react";
import Footer from "./Footer";
import Gt from "../assets/edit.jpeg";

function Home() {
  return (
    <section className="h-[calc(100vh-5rem)] w-full  bg-[#2a2a2e] ">
      <div className="text-white pt-[2rem] h-[90%] bg-gradient-to-b from-[#2a2a2e] to-[#313133] pl-8 sm:pl-2">
        <div className="container max-w-[960px] mx-auto">
          <img
            src={Gt}
            alt="/"
            className="w-[230px] h-[250px] mb-6 rounded-lg "
          />
          <p className="text-md leading-5">Hi there!</p>
          <h1 className="text-5xl  text-[#0096d3] font-bold">
            I'm Godstime Agholor O.
          </h1>
          <p className="text-lg">
            A front-end developer proficient in using JavaScript and ReactJs.
          </p>
          <a
            href="https://docs.google.com/document/d/187-1QPQDIYc-RLA0GCffFLRSraSdY_odLp8fNcOhQUU/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-3 px-4 py-2 border border-white rounded-md hover:bg-white hover:text-[#333] transition ease-in duration-200">
              Resume
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
