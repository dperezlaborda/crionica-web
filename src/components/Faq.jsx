import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../style/faq.css';

const Faq = (props) => {

    const [answer, setAnswer] = useState(false);

    return (
        <div>
            <h3>{props.question}
                <Button onClick={() => setAnswer(!answer)}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </Button>
            </h3>
            {answer && <p>{props.answer}</p>}
        </div>
    )
}

export default Faq
