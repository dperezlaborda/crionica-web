import React from 'react';
import img2 from '../img/logro2.jpg';
import img3 from '../img/logro3.jpg';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import IntroSections from '../components/IntroSections'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faBook } from '@fortawesome/free-solid-svg-icons';
import Achiev from '../components/Achiev';
import ReverseAch from '../components/ReverseAch';


const AchievContainer = () => {

    const ach = {
        img: img3,
        achievTitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse",
        achievSpan: <FontAwesomeIcon icon={faBook} />,
        achievText: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    }

    const reverseAch = {
        img: img2,
        achievTitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse",
        achievSpan: <FontAwesomeIcon icon={faArchive} />,
        achievText: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    }

    return (
        <>
            <Hero heroTitle="LOGROS"/>
            <section id="achievContainer" className="py-5">
                <Container>
                    <IntroSections sectionTitle="Nuestros Logros" />
                    <Row className="mb-5">
                        <Achiev img={ach.img} achievTitle={ach.achievTitle} achievSpan={ach.achievSpan} achievText={ach.achievText} />
                    </Row>
                    <Row>
                        <ReverseAch img={reverseAch.img} achievTitle={reverseAch.achievTitle} achievSpan={reverseAch.achievSpan} achievText={reverseAch.achievText} />
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AchievContainer
