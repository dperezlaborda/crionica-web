import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../style/about.css';

const About = () => {
    return (
        <Container fluid id="about">
            <Row>
                <Col sm={12} lg={4} className="no-padding">
                    <h2 className="bg-color text-center  pt-2 mb-0">
                        <em>¿Qué es la crionica?</em>
                    </h2>
                </Col>
                <Col lg={8} className="no-padding">
                    <h3 className="text-center px-4 py-5 about-text">Autem quod ne Phasellus rutrum diam molestie nisi aliquet ac in neque.Eos quis porro in non nemo ex. Phasellus rutrum diam molestie nisi aliquet ac in neque.Autem quod ne Phasellus rutrum diam molestie nisi aliquet ac in neque.Eos quis porro in non nemo ex. Phasellus rutrum diam molestie nisi aliquet ac in neque.Phasellus rutrum diam molestie nisi aliquet ac in neque.</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default About;