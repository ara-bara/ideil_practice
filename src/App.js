import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 2,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 3,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 4,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 5,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 6,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 7,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        },
        {
          id: 8,
          title: 'Yumbox',
          subtitle: '21 сет',
          img: 'item.svg',
          weight: '1500 гр',
          price: '799 грн'
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Slider />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
