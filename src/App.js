import './App.css';
import React from 'react';
import Menu from './components/Menu';
import Hero from './sections/Hero';
import About from './sections/About';
import Us from './sections/Us';
import ContactContainer from './sections/ContactContainer';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ObjectivesContainer from './sections/ObjectivesContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Menu />
            <Hero />
            <Us />
            <About />
            <ContactContainer />
            <Footer />
            <Contact />
            <ObjectivesContainer />
        </div>
    );
}

export default App;