import React, { Component } from 'react';
import icon from '../img/icon.png';
import arrowUp from '../img/plus.svg';
import arrowDown from '../img/minus.svg';

export class Order extends Component {
   render() {
      const { item, onDelete, onUpdateQuantity, discount } = this.props;
      const finalPrice = item.price * item.quantity * (1 - discount);

      return (
         <div className='order'>
            <div className='order-info'>
               <div className='order-info__img'>
                  <img
                     src={`${process.env.PUBLIC_URL}/img/${item.picture}`}
                     alt={item.title}
                  />
               </div>
               <div className='order-info__text'>
                  <div className='order-info__text-title'>
                     <h2>{item.title}</h2>
                     <h2>{item.subtitle}</h2>
                     <h2>{item.description}</h2>
                  </div>
                  <p>{item.weight}</p>
               </div>
               <div
                  className='delete-icon'
                  onClick={() => onDelete(item.id)}
               >
                  <img src={icon} alt="Видалити" />
               </div>
            </div>
            <div className='order-price'>
               <h2>{finalPrice.toFixed(2)} грн</h2>
               <div className='quantity-control'>
                  <img
                     src={arrowDown}
                     alt="Зменшити кількість"
                     onClick={() => onUpdateQuantity(item.id, -1)}
                     style={{ cursor: 'pointer' }}
                  />
                  <span>{item.quantity}</span>
                  <img
                     src={arrowUp}
                     alt="Збільшити кількість"
                     onClick={() => onUpdateQuantity(item.id, 1)}
                     style={{ cursor: 'pointer' }}
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Order;