import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './data/store'
import Home from "./view/Home/home";
import Products from "./view/Products/Products";
import Contact from "./view/Contact/contact";
import About from "./view/About/about";
import Product from "./view/Product/Product";
import Cart from "./view/Cart/cart";
import Header from "./component/header";
import Footer from "./component/footer";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </Provider>
);

