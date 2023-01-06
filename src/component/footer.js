import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import FBLogo from "../images/fb-logo.jpeg";
import INSLogo from "../images/instag-logo.jpeg";
import SNAPLogo from "../images/snap-logo.jpeg";
import TWTLogo from "../images/twitter-logo.jpeg";

function Footer() {
  return (
    <div className="footer">
      <div className="left-bottom-wrapper">
        <div className="left-bottom-container">
          © 2020 Copyright <NavLink to="/">KnockOffBrands.com</NavLink>
        </div>
      </div>
      <div className="right-bottom-container">
        <ul>
          <li>
            <a href="/#" className="">
              <img src={FBLogo} alt="" />
            </a>
          </li>
          <li>
            <a href="/#" className="">
              <img src={INSLogo} alt="" />
            </a>
          </li>
          <li>
            <a href="/#" className="">
              <img src={SNAPLogo} alt="" />
            </a>
          </li>
          <li>
            <a href="/#" className="">
              <img src={TWTLogo} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
