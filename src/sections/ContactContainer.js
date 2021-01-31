import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bg from '../img/bg-contact.jpg';
import '../style/contactContainer.css';

const ContactContainer = () => {
    return (
        <section id="contact" className="bg-contact" style={{
            backgroundImage: `url(${bg})`
        }}>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md={8} lg={8} xl={8}>
                        <div className="contact-text">
                            <h2>Mandanos un mensaje</h2>
                        </div>
                    </Col>
                    <Col md={4} lg={4} xl={4}>
                        <Button className="contact-btn">
                            Contactanos
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactContainer;