import React from 'react';
import Project from './Project';
import data from '../constants/projectsDetails';

function Projects() {
	return (
		<section className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-[#2a2a2e] to-[#313133] py-6">
			<h1 className="text-[#424245] py-3 text-center text-6xl font-bold ">Projects.</h1>
			<div className="container min-h-full max-w-[1024px] mx-auto grid lg:grid-cols-2 gap-[3rem] sm:gap-8 p-4 py-4 ">
				{data.map((item) => (
					<Project
						key={item.name}
						image={item.image ? item.image : null}
						demoLink={item.demoLink}
						name={item.name}
						type={item.type}
						about={item.about}
						techDets={item.techDets}
						projectLink={item.projectLink}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
