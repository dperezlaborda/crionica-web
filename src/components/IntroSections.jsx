import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/introSections.css';

const IntroSections = ({ sectionTitle }) => {
    return (
        <Row className="intro">
            <Col lg={4} className="text-center">
                <h1 className="intro-title-all">{sectionTitle}</h1>
            </Col>
            <Col lg={8} className="text-center">
                <p className="intro-text-all mb-5">Excepteur ex aliqua voluptate. Nisi nisi nisi aliqua eiusmod dolor dolor proident deserunt occaecat elit Lorem reprehenderit. Id culpa veniam ex aliqua magna elit pariatur do nulla. Excepteur enim magna veniam labore veniam sint.</p>
            </Col>
        </Row>
    )
}

export default IntroSections;
