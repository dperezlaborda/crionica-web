import React from 'react';
import img from '../img/background.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../style/hero.css';

const Hero = () => {
    return (
        <Container fluid id="hero">
            <Row className="image-container" style={{
                backgroundImage: `url(${img})`
            }}>
                <div className="black-gradient"></div>
                <Container className="text-container text-center my-4">
                    <h1 className="main-title text-uppercase mb-5 mt-5">crionica argentina</h1>
                    <h2 className="title mb-3">Phasellus rutrum diam molestie nisi aliquet ac in neque.</h2>
                    <small className="text text-muted">"Somos un grupo de crionicistas en Argentina…"</small>
                </Container>
            </Row>
        </Container>
    );
}

export default Hero;