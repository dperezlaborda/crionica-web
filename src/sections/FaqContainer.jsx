import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import IntroSections from '../components/IntroSections';
import Faq from '../components/Faq';

const FaqContainer = () => {

    const answers = [
        {
            question:"pregunta uno",
            answer:"respuesta uno"
        },
        {
            question:"pregunta dos",
            answer:"respuesta dos"
        },
        {
            question:"pregunta tres",
            answer:"respuesta tres"
        },
        {
            question:"pregunta cuatro",
            answer:"respuesta cuatro"
        },
        {
            question:"pregunta cinco",
            answer:"respuesta cinco"
        },
        {
            question:"pregunta seis",
            answer:"respuesta seis"
        }
    ]

    return (
        <>
            <Hero heroTitle="preguntas frecuentes"/>
            <section id="faq" className="my-5">
                <Container>
                    <IntroSections sectionTitle="Preguntas más frecuentes" />
                    <Row>
                        <Col>
                            {answers.map((ans, a) =>{
                                return(
                                    <Faq key={a} question={ans.question} answer={ans.answer}/>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FaqContainer;
