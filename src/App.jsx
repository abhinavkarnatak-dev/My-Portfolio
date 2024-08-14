import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;