import React from 'react';
import "../../Styles/Footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="frist-back">
        <div className="container">
          <div className="frist-content">
            <h1 className="footer-heading">Future School</h1>
            <div className="footer-sub-heading">
              <Link to="/">Home</Link>
              <Link to="/aboutpage">About</Link>
              <Link to="/servicePages">Services</Link>
              <Link to="/blogs">Blog</Link>
              <Link to="/contactPage">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="second-back">
        <div className="container">
          <div className="second-foooter-content">
            <h6 className="second-footer-heading">© Copyright by <span>Future School</span></h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;