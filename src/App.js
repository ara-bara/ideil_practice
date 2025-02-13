import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';




function App() {
  return (
    <div className="wrapper">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
