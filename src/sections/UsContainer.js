import React from 'react';
import Container from 'react-bootstrap/Container';
import IntroSections from '../components/IntroSections';
import Slider from '../components/Slider';

const UsContainer = () => {
    return (
        <Container id="us" className="py-5">
            <IntroSections sectionTitle="Quienes Somos"/>
            <Slider />
        </Container>
    )
}

export default UsContainer;