import React from 'react';
import myImage from '../assets/myPhoto.jpg';
import CV from '../assets/akResume.pdf'
import '@fortawesome/fontawesome-free/css/all.min.css';
import TypingEffect from 'react-typing-effect';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const Home = () => {
    return (
        <section className="min-h-screen flex justify-center items-center bg-black text-white px-36 z-10">
            <div className="flex flex-col md:flex-row items-center gap-14 lg:gap-20">
                <div className="rounded-full border-2 md:border-[3px] lg:border-[3px] border-Purple1 overflow-hidden w-[200px] md:min-w-48 lg:min-w-64 mt-[90px] md:-mt-10 lg:mt-0 md:-ml-10">
                    <img src={myImage} alt="Abhinav" className="rounded-full shadow-lg cursor-pointer hover:scale-110 transition ease-in-out"/>
                </div>
                <div className="text-center md:text-left z-10">
                    <h1 className="text-4xl text-nowrap lg:text-6xl font-bold lg:mt-10">Hi, It's <span className="text-white">Abhinav</span></h1>
                    <h3 className="text-2xl lg:text-4xl font-bold my-2">I'm a <span className='md:hidden lg:hidden'><br /></span><TypingEffect className="text-Purple1" text={['Front End Developer', 'Problem Solver', 'Programmer']} speed={100} eraseSpeed={100} typingDelay={100} eraseDelay={1500} cursorRenderer={cursor => <h1>{cursor}</h1>} /></h3>
                    <p className="text-base md:text-lg lg:text-lg mt-8">As a final-year B.Tech CSE student with a focus on AI/ML and front-end development, I'm really into creating smart systems and user-friendly interfaces. I enjoy working on projects that combine technology and creativity, whether it's building machine learning models or developing interactive web applications. My aim is to improve user experiences and explore new ideas in tech.</p>
                    <div className="flex justify-center md:justify-start mt-8 space-x-6">
                        <a href="https://github.com/abhinavkarnatak-dev" className="text-Purple1 border-2 border-Purple1 p-2 rounded-full hover:bg-Purple1 hover:text-black transition ease-in-out"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/abhinav-karnatak-9a7667206/" className="text-Purple1 border-2 border-Purple1 p-2 rounded-full hover:bg-Purple1 hover:text-black transition ease-in-out"><i className="fab fa-linkedin"></i></a>
                        <a href="https://x.com/AbhinavKar941" className="text-Purple1 border-2 border-Purple1 p-2 rounded-full hover:bg-Purple1 hover:text-black transition ease-in-out"><i className="fab fa-twitter"></i></a>                    </div>
                    <a href={CV} target='_blank' rel='noopener noreferrer' className="inline-block mt-10 md:mt-12 lg:mt-14 px-4 lg:px-8 py-2 lg:py-3 bg-Purple1 text-white font-bold text-sm lg:text-lg border-2 border-Purple1 rounded-full hover:bg-Purple2 hover:text-white transition ease-in-out mr-3 lg:mr-4 mb-10 lg:mb-0">Resume <OpenInNewIcon fontSize='small'/></a>

                </div>
            </div>
        </section>
    );
};

export default Home;