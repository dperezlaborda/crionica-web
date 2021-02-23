import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import IntroSections from '../components/IntroSections';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../style/inTheWorld.css';

//images
import arizona1 from '../img/Alcor1.jpg';
import china1 from '../img/Criónica_en_China1.jpg';
import rusia1 from '../img/KrioRus1.jpg';

const InTheWorld = () => {

    const [showImages, setShowImages] = useState('link-0');

    const handleSelect = (e) => {
        setShowImages(e);
    }

    return (
        <section id="inTheWorld">
            <Container>
                <IntroSections sectionTitle="Crionica en el mundo" sectionSubTitle="La criónica comenzó a implementarse en Estados Unidos hace más de 40 años, al principio con un número exiguo de seguidores, pero poco a poco ese número ha ido creciendo." />
                <Row>
                    <Col lg={12}>
                        <div className="tab-menu">
                            <Tabs activeKey={showImages} onSelect={handleSelect} className="text-center d-flex justify-content-center">
                                <Tab className="tab-link" eventKey="link-0" title="En el mundo">
                                    <Row>
                                        <Col>
                                            <div>
                                                <img alt="crionica en el mundo" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="link-1" title="Arizona">
                                    <Row>
                                        <Col>
                                            <div>
                                                <img alt="crionica en arizona" src={arizona1} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="link-2" title="China">
                                    <Row>
                                        <Col>
                                            <div>
                                                <img alt="crionica en china" src={china1} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="link-3" title="Rusia">
                                    <Row>
                                        <Col>
                                            <div>
                                                <img alt="crionica rusia" src={rusia1} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InTheWorld;
