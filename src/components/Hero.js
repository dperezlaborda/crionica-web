import React from 'react';
import img from '../img/TanquesAzul_b.jpg';
import heroTitle from '../img/crionica_titulo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../style/hero.css';

const Hero = ({ heroSub, heroTxt}) => {
    return (
        <Container fluid id="hero">
            <Row className="image-container" style={{
                backgroundImage: `url(${img})`
            }}>
                <div className="black-gradient"></div>
                <Container className="text-container text-center my-4">
                    <div className="main-title">
                        <img src={heroTitle} alt="crionica main title" className="image-title"/>
                    </div>
                    <h2 className="title mb-3">{heroSub}</h2>
                    <small className="text text-muted">{heroTxt}</small>
                </Container>
            </Row>
        </Container>
    );
}

export default Hero;