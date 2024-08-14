import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Tracks the active section

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (section) => {
        setActiveSection(section); // Set the active section
        const sectionElement = document.querySelector(`#${section}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full px-5 lg:px-20 py-5 lg:py-4 flex justify-left lg:justify-center items-center bg-black shadow-md z-20 border-b-[0.1px] border-white">
            <nav className="hidden lg:flex space-x-16">
                <a
                    onClick={() => handleScroll('home')}
                    className={`cursor-pointer text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'home' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Home
                </a>
                <a
                    onClick={() => handleScroll('about')}
                    className={`cursor-pointer text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'about' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    About
                </a>
                <a
                    onClick={() => handleScroll('skills')}
                    className={`cursor-pointer text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'skills' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Skills
                </a>
                <a
                    onClick={() => handleScroll('experience')}
                    className={`cursor-pointer text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'experience' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Experience
                </a>
                <a
                    onClick={() => handleScroll('projects')}
                    className={`cursor-pointer text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'projects' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Projects
                </a>
                <a
                    onClick={() => handleScroll('contact')}
                    className={`cursor-pointer text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'contact' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Contact
                </a>
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
                <a
                    onClick={() => handleScroll('home')}
                    className={`block mb-2 text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'home' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Home
                </a>
                <a
                    onClick={() => handleScroll('about')}
                    className={`block mb-2 text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'about' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    About
                </a>
                <a
                    onClick={() => handleScroll('skills')}
                    className={`block mb-2 text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'skills' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Skills
                </a>
                <a
                    onClick={() => handleScroll('experience')}
                    className={`block mb-2 text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'experience' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Experience
                </a>
                <a
                    onClick={() => handleScroll('projects')}
                    className={`block mb-2 text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'projects' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Projects
                </a>
                <a
                    onClick={() => handleScroll('contact')}
                    className={`block text-lg font-medium border-b-3 border-transparent transition ease-in-out ${
                        activeSection === 'contact' ? 'text-Purple1' : 'text-white hover:text-Purple1 hover:border-Purple1'
                    }`}
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;