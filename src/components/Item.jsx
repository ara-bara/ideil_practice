import React, { Component } from 'react';
import styles from './Item.module.scss';
import doneIcon from '../img/done-icon.svg';

export class Item extends Component {
   render() {
      const { item, orders, onAdd, onOpenCart, discount } = this.props;
      const isInCart = orders.some(order => order.id === item.id);
      const itemInCart = orders.find(order => order.id === item.id);

      const totalPriceForItem = itemInCart ? itemInCart.price * itemInCart.quantity : 0;
      const finalPrice = totalPriceForItem * (1 - discount);

      return (
         <div className={`${styles.item} ${styles[`item-${item.id}`]}`}>
            <img
               src={process.env.PUBLIC_URL + "/img/" + item.img}
               alt={item.title}
               className={`${styles.itemImg} ${styles[`item-img-${item.id}`]}`}
            />
            <div className={`${styles.itemTitleAndSubtitle} ${styles[`item-title-and-subtitle-${item.id}`]}`}>
               <h2 className={`${styles.itemTitle} ${styles[`item-title-${item.id}`]}`}>{item.title}</h2>
               <h2 className={`${styles.itemSubtitle} ${styles[`item-subtitle-${item.id}`]}`}>{item.subtitle}</h2>
            </div>
            <p className={`${styles.itemWeight} ${styles[`item-weight-${item.id}`]}`}>{item.weight}</p>
            <div className={styles.priceContainer}>
               {isInCart ? (
                  <div className={styles.inCart} onClick={onOpenCart}>
                     <img
                        src={doneIcon}
                        alt="Done"
                        className="doneIcon"
                     />
                     У кошику {itemInCart.quantity} шт за {finalPrice.toFixed(2)} грн
                  </div>
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