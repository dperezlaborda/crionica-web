import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    return (
        <Container fluid className="p-0">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="¿Qué es la criónica?" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Preguntas Frecuentes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Objetivos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Logros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#news">Quienes Somos</Nav.Link>
                        <Nav.Link href="#news">Noticias</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Menu;