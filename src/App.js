import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 2,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 3,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 4,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 5,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 6,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 7,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 8,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: '799 грн'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Slider />
        <Items items={this.state.items} onAdd={this.addToOrder} />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
