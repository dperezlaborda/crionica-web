import React from 'react';
import img from '../img/background.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../style/hero.css';

const Hero = () => {
    return (
        <Container>
            <Row className="image-container" style={{
                backgroundImage: `url(${img})`
            }}>
                <div className="black-gradient"></div>
                <div className="text-container">
                    <h1 className="main-title">crionica argentina</h1>
                    <span>Logo</span>
                    <h2 className="title">Phasellus rutrum diam molestie nisi aliquet ac in neque.</h2>
                    <p className="text">"Somos un grupo de crionicistas en Argentina…"</p>
                </div>
            </Row>
        </Container>
    );
}

export default Hero;