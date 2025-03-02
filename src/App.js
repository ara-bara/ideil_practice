import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      cartOpen: false, // Стан для відкриття/закриття кошика
      items: [
        {
          id: 1,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        },
        {
          id: 2,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        },
        {
          id: 3,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        },
        {
          id: 4,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        },
        {
          id: 5,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        },
        {
          id: 6,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        },
        {
          id: 7,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        },
        {
          id: 8,
          title: 'Yumbox',
          subtitle: '21 сет',
          description: 'суперкачний суперсет',
          img: 'item.svg',
          picture: 'picture.svg',
          weight: '1500 гр',
          price: 799
        }
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.checkout = this.checkout.bind(this);
    this.openCart = this.openCart.bind(this);
    this.closeCart = this.closeCart.bind(this); // Функція для закриття кошика
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, { ...item, quantity: 1 }] });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  updateQuantity(id, delta) {
    this.setState({
      orders: this.state.orders.map((el) =>
        el.id === id
          ? { ...el, quantity: Math.max(1, el.quantity + delta) }
          : el
      ),
    });
  }

  checkout() {
    const { orders } = this.state;
    console.log('Замовлення:', orders);
    const total = orders.reduce((sum, el) => sum + el.price * el.quantity, 0);
    const discount = total >= 1000 ? total * 0.1 : 0;
    const finalTotal = total - discount;
    console.log('Загальна сума:', finalTotal.toFixed(2), 'грн');
    this.setState({ orders: [] });
  }

  openCart() {
    this.setState({ cartOpen: true });
  }

  closeCart() {
    this.setState({ cartOpen: false });
  }

  render() {
    const total = this.state.orders.reduce(
      (sum, el) => sum + el.price * el.quantity,
      0
    );
    const discount = total >= 1000 ? 0.1 : 0;
    const finalTotal = total * (1 - discount);

    const totalItems = this.state.orders.reduce(
      (sum, el) => sum + el.quantity,
      0
    );

    return (
      <div className="wrapper">
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          onUpdateQuantity={this.updateQuantity}
          totalItems={totalItems}
          totalPrice={finalTotal}
          onCheckout={this.checkout}
          onOpenCart={this.openCart}
          cartOpen={this.state.cartOpen}
          onCloseCart={this.closeCart}
        />
        <div className={this.state.cartOpen ? "blur" : ""}>
          <Slider />
          <Items
            items={this.state.items}
            onAdd={this.addToOrder}
            orders={this.state.orders}
            onOpenCart={this.openCart}
            discount={discount}
          />
        </div>
      </div>
    );
  }
}

export default App;