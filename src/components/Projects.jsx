import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex justify-center bg-black">
            <div className="mt-10">
                <ProjectsCard/>
            </div>
        </section>
    );
};

export default Projects;