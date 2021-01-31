import React from 'react';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDna, faFlask, faAtom, faThermometerEmpty, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Objective from '../components/Objective';
import IntroSections from '../components/IntroSections';

const ObjectivesContainer = () => {

    const objs = [
        {
            iconObj: <FontAwesomeIcon icon={faBrain} />,
            titleObj: "Strategic Planning",
            textObj: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        },
        {
            iconObj: <FontAwesomeIcon icon={faDna} />,
            titleObj: "Strategic Planning",
            textObj: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        },
        {
            iconObj: <FontAwesomeIcon icon={faFlask} />,
            titleObj: "Strategic Planning",
            textObj: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        },
        {
            iconObj: <FontAwesomeIcon icon={faAtom} />,
            titleObj: "Strategic Planning",
            textObj: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        },
        {
            iconObj: <FontAwesomeIcon icon={faThermometerEmpty} />,
            titleObj: "Strategic Planning",
            textObj: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        },
        {
            iconObj: <FontAwesomeIcon icon={faChartLine} />,
            titleObj: "Strategic Planning",
            textObj: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        }
    ]

    return (
        <>
            <Hero heroTitle="objetivos" />
            <section id="obj" className="py-5">
                <Container>
                    <IntroSections sectionTitle="Nuestros Objetivos" />
                    <Row>
                        {objs.map((obj, o) => {
                            return (
                                <Objective key={o} iconObj={obj.iconObj} titleObj={obj.titleObj} textObj={obj.textObj} />
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ObjectivesContainer;
