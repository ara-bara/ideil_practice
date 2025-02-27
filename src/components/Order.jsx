import React, { Component } from 'react'
import icon from '../img/icon.png'

export class Order extends Component {
   render() {
      return (
         <div className='order'>
            <div>
               <div className='order__img'><img src={`${process.env.PUBLIC_URL}/img/${this.props.item.picture}`} alt={this.props.item.title} /></div>
               <div>
                  <h2>{this.props.item.title}</h2>
                  <h2>{this.props.item.subtitle}</h2>
                  <h2>{this.props.item.description}</h2>
               </div>
               <p>{this.props.item.weight}</p>
               <h2>{this.props.item.price}</h2>
               <div className='delete-icon'>
                  <img src={icon} alt="icon" ></img>
               </div>
            </div>
         </div>
      )
   }
}

export default Order