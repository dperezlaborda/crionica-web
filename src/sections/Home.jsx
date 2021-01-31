import React from 'react';
import Hero from './Hero';
import UsContainer from './UsContainer';
import About from './About';
import ContactContainer from './ContactContainer';

const Home = () => {
    return (
        <>
            <Hero />
            <UsContainer/>
            <About />
            <ContactContainer />
        </>
    )
}

export default Home;
