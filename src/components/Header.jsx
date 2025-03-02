import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.svg';
import Order from './Order';
import closeIcon from '../img/close-icon.svg';

const showOrders = (orders, onDelete, onUpdateQuantity, totalPrice) => {
   const discount = totalPrice >= 1000 ? 0.1 : 0;
   return (
      <div>
         {orders.map((el) => (
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
      <div className="empty">
         <h2>Немає товарів</h2>
      </div>
   );
};

const Header = ({
   orders,
   onDelete,
   onUpdateQuantity,
   totalItems,
   totalPrice,
   onCheckout,
   onOpenCart,
   cartOpen,
   onCloseCart,
}) => {
   return (
      <Navbar collapseOnSelect expand="md" fixed="top">
         <Container className="container-custom">
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
               <span className="d-md-none me-2 fw-bold" style={{ color: '#FFFFFF' }}>
                  Меню
               </span>
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
            <div className="container-order">
               <div
                  onClick={cartOpen ? onCloseCart : onOpenCart}
                  className={`basket ${cartOpen ? 'active' : ''}`}
               >
                  <div className="basket__quantity"><div>{totalItems}</div></div>
                  <div className="basket__sum">{totalPrice.toFixed(2)} грн</div>
               </div>
               {cartOpen && (
                  <div className="shop-cart">
                     <div className="cart-header">
                        <h2>Корзина</h2>
                        <img
                           src={closeIcon}
                           alt="Закрити"
                           onClick={onCloseCart}
                           className="close-icon"
                        />
                     </div>
                     {orders.length > 0
                        ? showOrders(orders, onDelete, onUpdateQuantity, totalPrice)
                        : showNothing()}
                     {orders.length > 0 && (
                        <div className="order-summary">
                           <div className="order-summary__delivery">
                              <div className="order-summary__delivery-text">Доставка</div>
                              <div className="order-summary__delivery-price">50 &#8372;</div>
                           </div>
                           <div className="order-summary__button">
                              <button className="order-summary__button-action" onClick={onCheckout}>
                                 Оформити за {totalPrice.toFixed(2)} &#8372;
                              </button>
                           </div>
                        </div>
                     )}
                  </div>
               )}
            </div>
         </Container>
      </Navbar>
   );
};

export default Header;