import React, { Component } from 'react';
import Item from './Item';
import styles from './Items.module.scss';

export class Items extends Component {
   render() {
      return (
         <main className={styles.main}>
            <h1>Найчастіше замовляють</h1>
            <div className={styles.containerCustom}>
               {this.props.items.map((el) => (
                  <Item key={el.id} item={el} onAdd={this.props.onAdd} />
               ))}
            </div>
         </main>
      );
   }
}

export default Items;
