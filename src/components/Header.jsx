import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.svg';

export default class Header extends Component {
   render() {
      return (
         <Navbar collapseOnSelect expand="md" fixed='top'>
            <Container className='container-custom'>
               <Navbar.Brand href="/">
                  <img
                     src={logo}
                     style={{ marginLeft: '25px' }}
                     width="114px"
                     height="72.41px"
                     className="d-inline-block align-top"
                     alt="logo"
                  />
               </Navbar.Brand>
               <div className="d-flex align-items-center">
                  {/* Напис "Меню" (з'являється тільки при малих розмірах) */}
                  <span className="d-md-none me-2 fw-bold" style={{ color: "#FFFFFF" }}>Меню</span>

                  {/* Бургер-кнопка */}
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               </div>
               <Navbar.Collapse >
                  <Nav className="mr-auto">
                     <Nav.Link href="/">Каталог</Nav.Link>
                     <Nav.Link href="catering">Кейтеринг</Nav.Link>
                     <Nav.Link href="about">Про нас</Nav.Link>
                     <Nav.Link href="contacts">Контакти</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      );
   }
}

