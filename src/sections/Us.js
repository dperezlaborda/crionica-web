import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from '../components/Slider.js';
import '../style/us.css'


const Us = () => {
    return (
        <Container id="us" className="my-4">
            <h2 className="text-center us-title"><em>Quiénes somos</em></h2>
            <Slider />
        </Container>
    )
}

export default Us;