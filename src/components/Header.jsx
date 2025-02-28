import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.svg';
import Order from './Order';

const showOrders = (orders, onDelete, onUpdateQuantity, totalPrice) => {
   const discount = totalPrice >= 1000 ? 0.1 : 0;
   return (
      <div>
         {orders.map(el => (
            <Order
               onDelete={onDelete}
               key={el.id}
               item={el}
               onUpdateQuantity={onUpdateQuantity}
               discount={discount}
            />
         ))}
      </div>
   );
};

const showNothing = () => {
   return (
      <div className='empty'>
         <h2>Немає товарів</h2>
      </div>
   );
};

const Header = ({ orders, onDelete, onUpdateQuantity, totalItems, totalPrice, onCheckout, onOpenCart }) => {
   const [cartOpen, setCartOpen] = useState(false);

   // Розрахунок знижки для всіх товарів у кошику
   const discount = totalPrice >= 1000 ? totalPrice * 0.1 : 0;
   const finalTotal = totalPrice - discount;

   return (
      <Navbar collapseOnSelect expand="md" fixed='top'>
         <Container className='container-custom'>
            <Navbar.Brand href="/">
               <img
                  src={logo}
                  style={{ marginLeft: '32px' }}
                  width="114px"
                  height="72.41px"
                  className="d-inline-block align-top"
                  alt="logo"
               />
            </Navbar.Brand>
            <div className="d-flex align-items-center">
               <span className="d-md-none me-2 fw-bold" style={{ color: "#FFFFFF" }}>Меню</span>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
            <Navbar.Collapse>
               <Nav className="mr-auto">
                  <Nav.Link href="/">Каталог</Nav.Link>
                  <Nav.Link href="/catering">Кейтеринг</Nav.Link>
                  <Nav.Link href="/about">Про нас</Nav.Link>
                  <Nav.Link href="/contacts">Контакти</Nav.Link>
               </Nav>
            </Navbar.Collapse>
            <div onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen ? 'active' : ''}`}>
               Кошик ({totalItems}) - {finalTotal.toFixed(2)} грн
            </div>
            {cartOpen && (
               <div className='shop-cart'>
                  {orders.length > 0 ? showOrders(orders, onDelete, onUpdateQuantity, totalPrice) : showNothing()}
                  {orders.length > 0 && (
                     <div className='cart-summary'>
                        <button onClick={onCheckout}>оформити за {finalTotal.toFixed(2)} грн</button>
                     </div>
                  )}
               </div>
            )}
         </Container>
      </Navbar>
   );
};

export default Header;