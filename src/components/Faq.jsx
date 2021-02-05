import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../style/faq.css';

const Faq = (props) => {

    const [answer, setAnswer] = useState(false);
    const [open, setOpen] = useState(true); //cambia el icono de la flecha

    const openAnswer = () => {
        setAnswer(!answer)
        setOpen(false);
    }

    return (
        <div id="container-faq">
            <h3 className="ques-title d-flex justify-content-between">{props.question}
                <Button onClick={openAnswer} className="icon">
                    {open ?
                        <FontAwesomeIcon icon={faChevronDown} />
                        :
                        <FontAwesomeIcon icon={faChevronUp} />
                    }
                </Button>
            </h3>
            { answer && <p className="ans-text">{props.answer}</p>}
        </div>
    )
}

export default Faq;
