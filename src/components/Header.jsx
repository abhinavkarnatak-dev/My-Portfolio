import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHome = () => {
        const homeSection = document.querySelector('#home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full px-5 lg:px-20 py-5 lg:py-4 flex justify-left lg:justify-center items-center bg-black shadow-md z-20 border-b-[0.1px] border-white">
            <nav className="hidden lg:flex space-x-16">
                <a onClick={scrollToHome} className="cursor-pointer text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Home</a>
                <a onClick={scrollToAbout} className="cursor-pointer text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">About</a>
                <a href="#" className="text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Skills</a>
                <a href="#" className="text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Experience</a>
                <a href="#" className="text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Projects</a>
                <a href="#" className="text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Contact</a>
            </nav>
            <button onClick={toggleMenu} className="lg:hidden">
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
            <nav id="mobile-menu" className={`bg-black border-b-2 border-white absolute top-full right-0 w-full p-5 lg:hidden transition-all duration-200 ease-linear ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <a onClick={scrollToHome} className="block mb-2 text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Home</a>
                <a onClick={scrollToAbout} className="block mb-2 text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">About</a>
                <a href="#" className="block mb-2 text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Skills</a>
                <a href="#" className="block mb-2 text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Experience</a>
                <a href="#" className="block mb-2 text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Projects</a>
                <a href="#" className="block text-lg text-white font-medium hover:text-Purple1 border-b-3 border-transparent hover:border-Purple1 transition ease-in-out">Contact</a>
            </nav>
        </header>
    );
};

export default Header;