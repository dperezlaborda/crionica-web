import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/introSections.css';

const IntroSections = ({ sectionTitle, sectionSubTitle }) => {
    return (
        <Row className="intro">
            <Col lg={12} className="text-center">
                <h1 className="intro-title-all">{sectionTitle}</h1>
                <span className="bottom-line"></span>
            </Col>
            <Col className="text-center">
                <p className="intro-text-all mb-5 font-italic">{sectionSubTitle}</p>
            </Col>
        </Row>
    )
}

export default IntroSections;
