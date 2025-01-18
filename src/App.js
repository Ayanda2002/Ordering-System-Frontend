import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Contact from './components/contact';
import Faq from './components/faq';
import Menu from './components/menu';
import Partnership from './components/partnership';
import Sign_In from './components/sign-in';
import Sign_Up from './components/sign-up';
import Values from './components/values';
// import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/sign-in" element={<Sign_In />} />
          <Route path="/sign-up" element={<Sign_Up />} />
          <Route path="/values" element={<Values />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
