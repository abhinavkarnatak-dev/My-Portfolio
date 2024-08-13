import React from 'react'
import AboutCard from './AboutCard'

const About = () => {
    return (
        <section id="about" className="min-h-screen flex justify-center bg-black">
            <div className="mt-10">
                <AboutCard/>
            </div>
        </section>
    );
};

export default About;