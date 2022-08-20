import React from 'react';
import banner from "../../Asset/Banner/Banner.png"
import "../../Styles/Banner.css"
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div>
              <div className="home-banner-content">
                <h4 className="banner-sub-heading">START LEARNING FROM HOME</h4>
                <h1 className="banner-main-heading">Learning Skills & Upgrade Your Life</h1>
                <div className='button-gap button-rexponsive'>
                  <p className="banner-peragraph">We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                  <button className="Find-Course-button" onClick={()=>navigate("/contactPage")}>Find Course</button>
                  <button className="Free-Trial-button">Start Free Trial</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-md-12 order-1 order-lg-2">
            <div className="banner-image">
              <img src={banner} alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;