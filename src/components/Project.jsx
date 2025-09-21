import { useState } from 'react';

import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Project({ image, demoLink, name, type, about, techDets, projectLink }) {
	const [aboutProj, setAbout] = useState(true);

	const handleClick = () => {
		setAbout(!aboutProj);
	};
	return (
		<div className="card flex justify-center items-center min-h-[300px] w-[100%] mx-auto shadow-md">
			<div className="w-[40%] h-full bg-[#424245] rounded-l-md">
				<div className="flex flex-col justify-between items-center h-full py-4 text-white">
					<motion.div
						whileHover={{
							scale: 1.2,
						}}
					>
						{image && <img src={image} alt="/" className="w-[60px] h-[60px] cursor-pointer" />}
					</motion.div>

					<a href={demoLink} target="_blank" rel="noreferrer">
						<button className=" px-4 py-2 border border-white rounded-md hover:bg-white hover:text-[#333] transition ease-in duration-200">
							Live Demo
						</button>
					</a>
				</div>
			</div>

			<div className="w-[60%] h-full bg-white rounded-r-md">
				<div className="flex flex-col justify-between items-start h-full py-4 text-[#33697e]">
					<div className="px-4">
						<h1 className="text-2xl font-semibold">{name}</h1>
						<p className="text-sm mt-[-5px] font-light">{type}</p>
						{aboutProj ? (
							<motion.div
								initial={{ y: '-20vh', opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="pb-4"
							>
								<h3 className="text-base mt-2 font-semibold ">About the Project</h3>
								<p className="font-light text-sm ">{about}</p>
							</motion.div>
						) : (
							<div>
								<motion.div
									initial={{ y: '-20vh', opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5 }}
									className="pb-4"
								>
									<h3 className="text-base mt-2 font-semibold">Technologies Used</h3>
									<p className="font-light text-sm ">{techDets}</p>
								</motion.div>
							</div>
						)}
					</div>

					<div className="px-2 flex items-center gap-4">
						<button
							onClick={handleClick}
							className=" px-4 py-2  text-[#fff]  rounded-md bg-[#424245] hover:opacity-90 transition ease-in duration-200"
						>
							{aboutProj ? 'Tech Details' : 'About'}
						</button>
						<a href={projectLink} target={projectLink ? '_blank' : '_self'} rel="noreferrer">
							<FiGithub
								size={25}
								className="text-[#424245] hover:text-[#33697e] transition ease-in duration-200 "
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
