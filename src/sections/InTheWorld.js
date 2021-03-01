import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import IntroSections from '../components/IntroSections';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../style/inTheWorld.css';

//images
import enElMundo from '../img/CriónicaFicción.jpg';
import arizona1 from '../img/Alcor1.jpg';
import arizona2 from '../img/Alcor2.jpg';
import china1 from '../img/Criónica_en_China1.jpg';
import china2 from '../img/Criónica_en_China2.jpg';
import rusia1 from '../img/KrioRus1.jpg';
import rusia2 from '../img/KrioRus2.jpg';

const InTheWorld = () => {

    const [showImages, setShowImages] = useState('link-0');

    const handleSelect = (e) => {
        setShowImages(e);
    }

    const imagesTabs = [
        {
            eventKey: "link-0",
            title: "En el mundo",
            image1: enElMundo
        },
        {
            eventKey: "link-1",
            title: "Arizona",
            image1: arizona1,
            image2: arizona2
        },
        {
            eventKey: "link-2",
            title: "China",
            image1: china1,
            image2: china2
        },
        {
            eventKey: "link-3",
            title: "Rusia",
            image1: rusia1,
            image2: rusia2
        }
    ]

    return (
        <section id="inTheWorld">
            <Container>
                <IntroSections sectionTitle="Crionica en el mundo" sectionSubTitle="La criónica comenzó a implementarse en Estados Unidos hace más de 40 años, al principio con un número exiguo de seguidores, pero poco a poco ese número ha ido creciendo." />
                <Row>
                    <Col lg={12}>
                        <div className="tab-menu">
                            <Tabs activeKey={showImages} onSelect={handleSelect} className="text-center d-flex justify-content-center">
                                {imagesTabs.map((imageTab, it) => (
                                    <Tab className="tab-link" eventKey={imageTab.eventKey} title={imageTab.title}>
                                        <Row>
                                            <Col lg={4} sm={6}>
                                                <div>
                                                    <img alt={`imagen ${imageTab.title}`} src={imageTab.image1} className="imgTab" />
                                                </div>
                                                <div>
                                                    <img alt={`imagen ${imageTab.title}`} src={imageTab.image2} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab>
                                ))}
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InTheWorld;
