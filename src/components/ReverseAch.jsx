import React from 'react';
import Col from 'react-bootstrap/Col';

const ReverseAch = (props) => {
    return (
        <>
            <Col lg={6}>
                <h2 className="about-title">{props.achievTitle}</h2>
                <div className="media">
                    <span className="achiev-icon">{props.achievSpan}</span>
                    <p className="about-text">{props.achievText}</p>
                </div>
                <div className="media">
                    <span className="achiev-icon">{props.achievSpan}</span>
                    <p className="about-text">{props.achievText}</p>
                </div>
                <div className="media">
                    <span className="achiev-icon">{props.achievSpan}</span>
                    <p className="about-text">{props.achievText}</p>
                </div>
            </Col>
            <Col>
                <img className="img-fluid pb-3" alt="imagen logro" src={props.img} />
            </Col>
        </>
    )
}

export default ReverseAch;
