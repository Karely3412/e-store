import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';

function Header() {
    return (
        <div className="nav">
            <div className="left-top-nav-container">
                <h2><NavLink to="/">KnockOff Brands</NavLink></h2>
            </div>
            <div className="right-top-nav-container">
                <ul>
                    <li><NavLink activeclassname="active" to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;