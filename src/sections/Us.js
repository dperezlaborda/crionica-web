import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from '../components/Slider';
import '../style/us.css'


const Us = () => {
    return (
        <Container id="us" className="my-5">
            <h2 className="text-center us-title"><em>Quiénes somos</em></h2>
            <Slider />
        </Container>
    )
}

export default Us;