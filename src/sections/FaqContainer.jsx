import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Hero from '../components/Hero';
import IntroSections from '../components/IntroSections';
import Faq from 'react-faq-component';

const FaqContainer = () => {

    const data = {
        rows: [
            {
                title: "primera pregunta",  //NO SE PUEDE CAMBIAR EL NOMBRE DE TITLE NI CONTENT
                content: "primera respuesta"
            },
            {
                title: "segunda pregunta",
                content: "segunda respuesta"
            },
            {
                title: "tercera pregunta",
                content: "tercera respuesta"
            },
            {
                title: "cuarta pregunta",
                content: "cuarta respuesta"
            },
            {
                title: "quinta pregunta",
                content: "quinta respuesta"
            },
            {
                title: "sexta pregunta",
                content: "sexta respuesta"
            }
        ]
    }

    const styles = {
        // bgColor: 'white',
        rowTitleColor: "#4C6873",
        rowContentColor: '#6c757d',
        arrowColor: "#4C6873",
    };

    const config = {
        // animate: true,
        //arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <>
            <Hero heroTitle="PREGUNTAS FRECUENTES" />
            <section id="faq" className="my-5">
                <Container>
                    <IntroSections sectionTitle="Preguntas más frecuentes" />
                    <Row>
                        <Col>
                            <Faq data={data} config={config} styles={styles} />
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default FaqContainer;
