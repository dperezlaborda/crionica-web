import './App.css';
import React from 'react';
import Menu from './components/Menu.js';
import Hero from './sections/Hero.js';
import About from './sections/About.js';
import Us from './sections/Us.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Menu />
            <Hero />
            <About />
            <Us />
        </div>
    );
}

export default App;