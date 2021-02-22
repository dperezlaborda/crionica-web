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
                <IntroSections
                    sectionTitle="¿ Qué es la Criónica ?"
                    sectionSubTitle="La criónica es una tecnología basada en la criopreservación de cuerpos humanos enteros o de solo su cerebro a muy bajas temperaturas (-196 ºC, inmersos en nitrógeno líquido), con el objetivo de que sean reanimados en un futuro cuando la tecnología médica pueda hacerlo y curarlos de la enfermedad por la cual fallecieron." />
                <Row>
                    <Col lg={6} className="about-img">
                        <img src={image_about} alt="imagen de about" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <h2 className="about-title text-uppercase">historia de la criónica</h2>
                        <h3 className="about-text font-italic"> La criónica comenzó a implementarse en Estados Unidos hace más de 40 años, al principio con un número exiguo de seguidores, pero poco a poco ese número ha ido creciendo.</h3>
                        <p className="about-text">
                            De dos centros criónicos que surgieron en Estados Unidos a principios de los años ’70, hoy día se han creado centros en Rusia y China, habiendo crecido su número de dos a cuatro en Estados Unidos.
                            También han surgido grupos de autoayuda criónica en varios países del mundo, ubicados en Europa Occidental a los que se suman Australia y Canadá. Estos grupos se encargan, después del deceso,
                            de acondicionar los cuerpos (denominados “pacientes”) para ser transportados a algún centro criónico del extranjero para su almacenamiento permanente. Nuevamente, en este caso, estos avances casi
                            no han llegado a los países menos desarrollados.
                        </p>
                        <p className="about-text">En América Latina existe un solo grupo de autoayuda activo hasta ahora: <b>nosotros.</b></p>
                        <p className="about-text">Buscamos: </p>
                        <ul className="about-list">
                            <li className="media pb-1">
                                <span className="pr-2"><FontAwesomeIcon icon={faCheckCircle} className="icon-about" /></span>
                                <p className="li-text"> Observar el escenario internacional.</p>
                            </li>
                            <li className="media pb-1">
                                <span className="pr-2"><FontAwesomeIcon icon={faCheckCircle} className="icon-about" /></span>
                                <p className="li-text"> Difundir la información en nuestro medio.</p>
                            </li>
                            <li className="media pb-1">
                                <span className="pr-2"><FontAwesomeIcon icon={faCheckCircle} className="icon-about" /></span>
                                <p className="li-text"> Jugar un rol protagónico en el desarrollo de un grupo criónico de autoayuda en Argentina. </p>
                            </li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;