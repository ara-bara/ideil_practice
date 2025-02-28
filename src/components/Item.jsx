import React, { Component } from 'react';
import styles from './Item.module.scss';

export class Item extends Component {
   render() {
      const { item, orders, onAdd, onOpenCart } = this.props;
      const itemInCart = orders.find(order => order.id === item.id);
      const isInCart = Boolean(itemInCart);
      const quantity = isInCart ? itemInCart.quantity : 0;

      // Розрахунок загальної суми для цього товару в кошику
      const totalPriceForItem = item.price * quantity;

      // Знижка 10% застосовується, якщо загальна сума для цього товару перевищує 1000 грн
      const discount = totalPriceForItem >= 1000 ? 0.1 : 0;

      // Правильна ціна за одиницю товару з урахуванням знижки
      const discountedPricePerItem = item.price * (1 - discount);

      return (
         <div className={styles.item}>
            <img
               src={`${process.env.PUBLIC_URL}/img/${item.img}`}
               alt={item.title}
               className={styles.itemImg}
            />
            <div className={styles.itemTitleAndSubtitle}>
               <h2 className={styles.itemTitle}>{item.title}</h2>
               <h2 className={styles.itemSubtitle}>{item.subtitle}</h2>
            </div>
            <p className={styles.itemWeight}>{item.weight}</p>
            <div className={styles.priceContainer}>
               {isInCart ? (
                  <h2 className={styles.inCart} onClick={onOpenCart}>
                     У кошику {quantity} шт за {(discountedPricePerItem * quantity).toFixed(2)} грн
                  </h2>
               ) : (
                  <>
                     <h2 className={styles.itemPrice}>{item.price} грн</h2>
                     <h2 className={styles.addToCart} onClick={() => onAdd(item)}>
                        Додати в кошик
                     </h2>
                  </>
               )}
            </div>
         </div>
      );
   }
}

export default Item;
