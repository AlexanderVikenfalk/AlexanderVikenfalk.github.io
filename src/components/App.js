import React from 'react';
import Background from "./Background"
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
    return (
        <div className="app">
            <Background/>
            <Navigation/>
            <About/>
            <Contact/>
            <Projects/>
        </div>
    );
}

export default App;
