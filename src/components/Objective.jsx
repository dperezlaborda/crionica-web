import React from 'react';
import Col from 'react-bootstrap/Col';
import '../style/objective.css';

const Objective = (props) => {
    return (
        <>
            <Col lg={6} md={8}>
                <div className="single-obj text-center mb-4">
                    <div className="obj-icon-container">
                        <span className="obj-icon">{props.iconObj}</span>
                    </div>
                    <div className="obj-txt-container">
                        <h5>{props.titleObj}</h5>
                        <p>{props.textObj}</p>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Objective
