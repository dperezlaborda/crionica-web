import React from 'react';
import img from '../img/background.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../style/hero.css';

const Hero = ({heroTitle, heroSub, heroTxt}) => {
    return (
        <Container fluid id="hero">
            <Row className="image-container" style={{
                backgroundImage: `url(${img})`
            }}>
                <div className="black-gradient"></div>
                <Container className="text-container text-center my-4">
                    <h1 className="main-title text-uppercase">{heroTitle}</h1>
                    <h2 className="title mb-3">{heroSub}</h2>
                    <small className="text text-muted">{heroTxt}</small>
                </Container>
            </Row>
        </Container>
    );
}

export default Hero;