import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '../style/footer.css'

const Footer = () => {
    return (
        <footer id="footer-area">
            <Container>
                <div className="footer-top footer-padding">
                    <Row className="justify-content-between">
                        <Col sm={3} md={4} lg={4} xl={4}>
                            <div className="footer-caption">
                                <div className="mb-5">
                                    <div className="footer-logo">Logo</div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={4} xl={4}>
                            <div className="footer-caption">
                                <div className="footer-title">
                                    <h4>Accesos Rapidos</h4>
                                    <ul>
                                        <li>
                                            <NavLink to="/preguntas_frecuentes" className="nav-link-footer">Preguntas Frecuentes</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/objetivos" className="nav-link-footer">Objetivos</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/logros" className="nav-link-footer">Logros</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/noticias" className="nav-link-footer">Noticias</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={3}>
                            <div className="footer-caption">
                                <div className="footer-title">
                                    <h4>+564 7885 3222</h4>
                                    <ul>
                                        <li>
                                            <p className="footer-mail">youremail@gmail.com</p>
                                        </li>
                                    </ul>
                                    <p className="footer-adress">123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                                </div>
                                <div className="footer-social">
                                    <a href="https://www.facebook.com/" className="mr-2">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a href="https://twitter.com/?lang=es" className="mr-2">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="https://www.instagram.com/" className="mr-2">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="footer-bottom">
                    <Row>
                        <Col lx={12}>
                            <div className="footer-copyright">
                                <p className="text-uppercase">Copyright ©2020 All rights reserved</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;