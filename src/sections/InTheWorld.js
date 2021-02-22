import React from 'react';
import Container from 'react-bootstrap/Container';
import IntroSections from '../components/IntroSections';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

const InTheWorld = () => {

    const handleSelect = (event) => {
        const selected = event.currentTarget;

    }

    return (
        <section id="inTheWorld">
            <Container>
                <IntroSections sectionTitle="Crionica en el mundo" sectionSubTitle="La criónica comenzó a implementarse en Estados Unidos hace más de 40 años, al principio con un número exiguo de seguidores, pero poco a poco ese número ha ido creciendo." />
                <Row>
                    <Col>
                        <Nav onSelect={(selectedKey) => alert(`select ${selectedKey}`)}>
                            <NavItem>
                                <Nav.Link eventKey="link-1">Arizona</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-2">China</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-3">Rusia</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InTheWorld;
