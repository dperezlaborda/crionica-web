import React from 'react';
import Col from 'react-bootstrap/Col';
import '../style/obj.css'

const Obj = (props) => {
    return (
        <>
            <Col>
                <div className="pt-5 obj">
                    <div className="text-center px-3 mb-5">
                        <span className="obj-icon">
                            {props.icon}
                        </span>
                        <div className="obj-txt-container">
                            <h5>{props.title}</h5>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Obj;
