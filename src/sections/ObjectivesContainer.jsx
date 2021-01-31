import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDna, faFlask, faAtom, faThermometerEmpty, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Objective from '../components/Objective';
import IntroSections from '../components/IntroSections';
import Obj from '../components/Obj';

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

    const objectives = [
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title:"Titulo Uno",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
        },
        {
            icon:<FontAwesomeIcon icon={faBrain} />,
            title:"Titulo Dos",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        },
        {
            icon:<FontAwesomeIcon icon={faAtom} />,
            title:"Titulo Tres",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
        }
    ]

    return (
        <>
            <section id="obj">
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
            <section id="objectives" className="pt-5">
                <Container>
                    <IntroSections sectionTitle="Nuestros Objetivos 2" />
                    <Row>
                        {objectives.map((object, ob) =>{
                            return(
                                <Obj key={ob} icon={object.icon} title={object.title} text={object.text}/>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ObjectivesContainer;
