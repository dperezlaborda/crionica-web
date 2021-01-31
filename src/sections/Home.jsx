import React from 'react';
import Hero from '../components/Hero';
import UsContainer from './UsContainer';
import About from './About';
import ContactContainer from './ContactContainer';

const Home = () => {
    return (
        <>
            <Hero heroTitle="crionica argentina" heroSub="Ullamco laboris nisi ut aliquip ex ea commodo consequat." heroTxt="Somos un grupo de crionicistas en Argentina..."/>
            <About />
            <UsContainer/>
            <ContactContainer />
        </>
    )
}

export default Home;
