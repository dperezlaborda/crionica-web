import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 56) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <header >
            <Container fluid className="p-0">
                <Navbar expand="lg" fixed="top" className={navbar ? 'navbar active' : 'navbar'}>
                    <Navbar.Brand href="#home">logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#us">Quienes Somos</Nav.Link>
                            <NavDropdown title="¿Qué es la criónica?" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#faq">Preguntas Frecuentes</NavDropdown.Item>
                                <NavDropdown.Item href="#objetivos">Objetivos</NavDropdown.Item>
                                <NavDropdown.Item href="#logros">Logros</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#news">Noticias</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default Menu;