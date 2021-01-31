import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Airform from 'react-airform';
import '../style/contact.css';


const Contact = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <section id="contact-site">
            <Container>
                <Airform email="dperezlaborda@gmail.com">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={12}>
                                <h2 className="contact-site-title">Get in Touch</h2>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <FormControl className="form-style w-100 h-100" required as="textarea" rows={9} cols={30} placeholder="Escribinos" name="message">
                                            </FormControl>
                                            <FormControl.Feedback type="invalid">Te olvidaste del mensaje.</FormControl.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <FormControl className="form-style height" required type="text" placeholder="Tu nombre"></FormControl>
                                            <FormControl.Feedback type="invalid">Falta tu nombre!</FormControl.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <FormControl className="form-style height" required type="email" placeholder="Ingresa tu email"></FormControl>
                                            <FormControl.Feedback type="invalid">Falta tu email!</FormControl.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <FormControl className="form-style height" type="text" placeholder="Asunto"></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button className="contact-btn mb-5" type="submit">Enviar</Button>
                            </Col>
                            <Col className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info-icon">
                                        <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} />
                                    </span>
                                    <div className="media-body ml-2">
                                        <h3 className="contact-info-text">Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info-icon">
                                        <FontAwesomeIcon className="contact-icon" icon={faMobileAlt} />
                                    </span>
                                    <div className="media-body ml-2">
                                        <h3 className="contact-info-text">11 5656 17044</h3>
                                        <p>Lun a Vier 9 a 18hs</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info-icon">
                                        <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                                    </span>
                                    <div className="media-body">
                                        <h3 className="contact-info-text">blabla@gmail.com</h3>
                                        <p>Envianos tu consulta !</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Airform>
            </Container>
        </section>
    )
}

export default Contact
