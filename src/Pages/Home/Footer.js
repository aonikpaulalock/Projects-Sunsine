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
              <Link to="/services">Services</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/courses">Courses</Link>
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