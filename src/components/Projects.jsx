import React, { useState } from "react";
import Gt from "../assets/gt.jpeg";
import { FiGithub } from "react-icons/fi";

function Projects() {
  const [projectOne, setProjectOne] = useState(true);
  const [projectTwo, setProjectTwo] = useState(true);
  const [projectThree, setProjectThree] = useState(true);
  const [projectFour, setProjectFour] = useState(true);

  const handleProjectOneClick = () => {
    setProjectOne(!projectOne);
  };
  const handleprojectTwoClick = () => {
    setProjectTwo(!projectTwo);
  };
  const handleprojectThreeClick = () => {
    setProjectThree(!projectThree);
  };
  const handleprojectFourClick = () => {
    setProjectFour(!projectFour);
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#2a2a2e] to-[#313133] py-6">
      <h1 className="text-[#424245] py-3 text-center text-6xl font-bold ">
        Projects.
      </h1>
      <div className="container min-h-full max-w-[1024px] mx-auto grid lg:grid-cols-2 gap-8 p-4 py-4 ">
        <div className="card flex justify-center items-center h-[280px] w-[100%] mx-auto shadow-md">
          <div className="w-[40%] h-full bg-[#424245] rounded-l-md">
            <div className="flex flex-col justify-between items-center h-full py-4 text-white">
              <img src={Gt} alt="/" className="w-[50px] h-[50px]" />
              <a
                href="http://techclub-landing-page.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className=" px-4 py-2 border border-white rounded-md hover:bg-white hover:text-[#333] transition ease-in duration-200">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="w-[60%] h-full bg-white rounded-r-md">
            <div className="flex flex-col justify-between items-start h-full py-4 text-[#33697e]">
              <div className="px-4">
                <h1 className="text-2xl font-semibold">TODP Tech Bootcamp</h1>
                <p className="text-sm mt-[-5px] font-light">Web Page</p>
                {projectOne ? (
                  <div>
                    <h3 className="text-base mt-2 font-semibold">
                      About the Project
                    </h3>
                    <p className="font-light text-sm ">
                      This is a Landing page for TODP Tech Bootcamp, Its a web
                      page where users who are interested in the tech bootcamp
                      can go register.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h3 className="text-base mt-2 font-semibold">
                        Technologies Used
                      </h3>
                      <p className="font-light text-sm ">
                        This landing page was built with ReactJs and styled with
                        TailwindCSS, I also used some animation libraries to
                        make the page feel alive, Framer Motion and
                        AOS(Animation On Scroll) was also used.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-2 flex items-center gap-4">
                <button
                  onClick={handleProjectOneClick}
                  className=" px-4 py-2  text-[#fff]  rounded-md bg-[#424245] hover:opacity-90 transition ease-in duration-200"
                >
                  {projectOne ? "Tech Details" : "About"}
                </button>
                <a
                  href="https://github.com/godstimedev/techclub-landing-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub
                    size={25}
                    className="text-[#424245] hover:text-[#33697e] transition ease-in duration-200 "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex justify-center items-center h-[280px] w-[100%] mx-auto shadow-md">
          <div className="w-[40%] h-full bg-[#424245] rounded-l-md">
            <div className="flex flex-col justify-between items-center h-full py-4 text-white">
              <img src={Gt} alt="/" className="w-[50px] h-[50px]" />
              <a
                href="https://url-shortener-ten-hazel.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className=" px-4 py-2 border border-white rounded-md hover:bg-white hover:text-[#333] transition ease-in duration-200">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="w-[60%] h-full bg-white rounded-r-md">
            <div className="flex flex-col justify-between items-start h-full py-4 text-[#33697e]">
              <div className="px-4">
                <h1 className="text-2xl font-semibold">URL Shortener</h1>
                <p className="text-sm mt-[-5px] font-light">Website</p>
                {projectTwo ? (
                  <div>
                    <h3 className="text-base mt-2 font-semibold">
                      About the Project
                    </h3>
                    <p className="font-light text-sm ">
                      This is a Website where a user can shorten any valid URL
                      and copy the shortened link to their clipboard in a single
                      click.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h3 className="text-base mt-2 font-semibold">
                        Technologies Used
                      </h3>
                      <p className="font-light text-sm ">
                        I built this using ReactJs and styled it using
                        TailwindCSS. I integrated the website with the shrtcode
                        API to create shortened URLs.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-2 flex items-center gap-4">
                <button
                  onClick={handleprojectTwoClick}
                  className=" px-4 py-2  text-[#fff]  rounded-md bg-[#424245] hover:opacity-90 transition ease-in duration-200"
                >
                  {projectTwo ? "Tech Details" : "About"}
                </button>
                <a
                  href="https://github.com/godstimedev/url-shortener"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub
                    size={25}
                    className="text-[#424245] hover:text-[#33697e] transition ease-in duration-200 "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex justify-center items-center h-[280px] w-[100%] mx-auto shadow-md">
          <div className="w-[40%] h-full bg-[#424245] rounded-l-md">
            <div className="flex flex-col justify-between items-center h-full py-4 text-white">
              <img src={Gt} alt="/" className="w-[50px] h-[50px]" />
              <a
                href="https://calculator-ten-hazel.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className=" px-4 py-2 border border-white rounded-md hover:bg-white hover:text-[#333] transition ease-in duration-200">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="w-[60%] h-full bg-white rounded-r-md">
            <div className="flex flex-col justify-between items-start h-full py-4 text-[#33697e]">
              <div className="px-4">
                <h1 className="text-2xl font-semibold">Calculator</h1>
                <p className="text-sm mt-[-5px] font-light">Web App</p>
                {projectThree ? (
                  <div>
                    <h3 className="text-base mt-2 font-semibold">
                      About the Project
                    </h3>
                    <p className="font-light text-sm ">
                      This is a calculator app where user can perform basic
                      mathematical operations like addition, subtraction,
                      multiplication, and division. User can also adjust the
                      color theme based on their preference.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h3 className="text-base mt-2 font-semibold">
                        Technologies Used
                      </h3>
                      <p className="font-light text-sm ">
                        This web app was built using ReactJs hooks mainly the
                        useReducer hook and styled with CSS and SCSS for the
                        different themes.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-2 flex items-center gap-4">
                <button
                  onClick={handleprojectThreeClick}
                  className=" px-4 py-2  text-[#fff]  rounded-md bg-[#424245] hover:opacity-90 transition ease-in duration-200"
                >
                  {projectThree ? "Tech Details" : "About"}
                </button>
                <a
                  href="https://github.com/godstimedev/calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub
                    size={25}
                    className="text-[#424245] hover:text-[#33697e] transition ease-in duration-200 "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex justify-center items-center h-[280px] w-[100%] mx-auto shadow-md">
          <div className="w-[40%] h-full bg-[#424245] rounded-l-md">
            <div className="flex flex-col justify-between items-center h-full py-4 text-white">
              <img src={Gt} alt="/" className="w-[50px] h-[50px]" />
              <a
                href="https://quizzical-app-theta.vercel.app/"
                target="_blank "
                rel="noreferrer"
              >
                <button className=" px-4 py-2 border border-white rounded-md hover:bg-white hover:text-[#333] transition ease-in duration-200">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="w-[60%] h-full bg-white rounded-r-md">
            <div className="flex flex-col justify-between items-start h-full py-4 text-[#33697e]">
              <div className="px-4">
                <h1 className="text-2xl font-semibold">Quzzical</h1>
                <p className="text-sm mt-[-5px] font-light">Web App</p>
                {projectFour ? (
                  <div>
                    <h3 className="text-base mt-2 font-semibold">
                      About the Project
                    </h3>
                    <p className="font-light text-sm ">
                      This is a Quiz app where user can test their knowledge in
                      sport.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h3 className="text-base mt-2 font-semibold">
                        Technologies Used
                      </h3>
                      <p className="font-light text-sm ">
                        This web app was built using ReactJs and styled with
                        pure CSS. I integrated the web app with open trivia
                        database API to fetch the questions that will be
                        displayed to the user.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-2 flex items-center gap-4">
                <button
                  onClick={handleprojectFourClick}
                  className=" px-4 py-2  text-[#fff]  rounded-md bg-[#424245] hover:opacity-90 transition ease-in duration-200"
                >
                  {projectFour ? "Tech Details" : "About"}
                </button>
                <a
                  href="https://github.com/godstimedev/quizzical-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub
                    size={25}
                    className="text-[#424245] hover:text-[#33697e] transition ease-in duration-200 "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
