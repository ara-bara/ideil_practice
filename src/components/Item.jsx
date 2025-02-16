import React, { Component } from 'react';
import styles from './Item.module.scss'; // Імпортуємо модульні стилі

export class Item extends Component {
   render() {
      const { item } = this.props;

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
            <h2 className={`${styles.itemPrice} ${styles[`item-price-${item.id}`]}`}>{item.price}</h2>
         </div>
      );
   }
}

export default Item;
