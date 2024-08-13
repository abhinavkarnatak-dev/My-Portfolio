import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Skills/>
            <Experience/>
        </div>
    );
};

export default App;