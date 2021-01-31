import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/">
                        <Navbar.Brand>logo</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink to="/quienes_somos" className="nav-link">Quienes Somos</NavLink>
                            <NavDropdown title="¿Qué es la criónica?" id="basic-nav-dropdown">
                                <NavLink to="/preguntas_frecuentes" className="dropdown-item">Preguntas Frecuentes</NavLink>
                                <NavLink to="/objetivos" className="dropdown-item">Objetivos</NavLink>
                                <NavLink to="/logros" className="dropdown-item">Logros</NavLink>
                            </NavDropdown>
                            <NavLink to="/noticias" className="nav-link">Noticias</NavLink>
                            <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default Menu;