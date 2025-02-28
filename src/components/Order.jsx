import React, { Component } from 'react';
import icon from '../img/icon.png';

export class Order extends Component {
   render() {
      const { item, onDelete, onUpdateQuantity, discount } = this.props;
      const finalPrice = item.price * item.quantity * (1 - discount);

      return (
         <div className='order'>
            <div>
               <div className='order__img'>
                  <img
                     src={`${process.env.PUBLIC_URL}/img/${item.picture}`}
                     alt={item.title}
                  />
               </div>
               <div>
                  <h2>{item.title}</h2>
                  <h2>{item.subtitle}</h2>
                  <h2>{item.description}</h2>
               </div>
               <p>{item.weight}</p>
               <h2>{finalPrice.toFixed(2)} грн</h2>
               <div className='quantity-control'>
                  <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
               </div>
               <div
                  className='delete-icon'
                  onClick={() => onDelete(item.id)}
               >
                  <img src={icon} alt="Видалити" />
               </div>
            </div>
         </div>
      );
   }
}

export default Order;