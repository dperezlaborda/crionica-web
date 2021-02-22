import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import UsContainer from './UsContainer';
import InTheWorld from './InTheWorld';
import ContactContainer from './ContactContainer';

const Home = () => {

    return (
        <>
            <Hero heroTitle="CRIONICA ARGENTINA" heroSub="Ullamco laboris nisi ut aliquip ex ea commodo consequat." heroTxt="Somos un grupo de crionicistas en Argentina..." />
            <About />
            <UsContainer />
            <InTheWorld />
            <ContactContainer />
        </>
    )
}

export default Home;
