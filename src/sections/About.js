import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IntroSections from '../components/IntroSections';

import '../style/about.css';
import image_about from '../img/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <section id="about">
            <Container>
                <IntroSections sectionTitle="¿ Qué es la Criónica ?" />
                <Row>
                    <Col lg={6} className="about-img">
                        <img src={image_about} alt="imagen de about" className="img-fluid"/>
                    </Col>
                    <Col lg={6}>
                        <h2 className="about-title">Lorem ipsum dolor sit amet, consectetur adipiscing elite storium paralate</h2>
                        <h3 className="about-text font-italic">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul className="about-list">
                            <li className="media pb-1">
                                <span className="pr-2"><FontAwesomeIcon icon={faCheckCircle} className="icon-about"/></span>
                                <p className="li-text"> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li className="media pb-1">
                                <span className="pr-2"><FontAwesomeIcon icon={faCheckCircle} className="icon-about"/></span>
                                <p className="li-text">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </li>
                            <li className="media pb-1">
                                <span className="pr-2"><FontAwesomeIcon icon={faCheckCircle} className="icon-about"/></span>
                                <p className="li-text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                            </li>
                        </ul>
                        <p className="about-text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Libero justo laoreet sit amet cursus sit amet dictum sit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;