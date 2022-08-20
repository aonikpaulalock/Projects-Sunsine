import React from 'react';
import { useNavigate } from 'react-router-dom';
import Service from './Service';
import "../../Styles/Services.css"









const services = [
  { id: 1, name: "Development", des: "6 Courses", img: "https://i.ibb.co/3kzXztR/development-concept-illustration-114360-562-Copy.png" },
  { id: 2, name: "Business", des: "8 Courses", img: "https://i.ibb.co/47Y1hhF/Business.png" },
  { id: 3, name: "Heath & Fitness", des: "6 Courses", img: "https://i.ibb.co/2KR3Bqr/Fitness.png" },
  { id: 4, name: "Web Design", des: "8 Courses", img: "https://i.ibb.co/HrXZcVL/Web-design.png" },
  { id: 5, name: "Grapish Design", des: "5 Courses", img: "https://i.ibb.co/CmjJtF0/grapish.png" },
  { id: 6, name: "Facebook Marketing", des: "10 Courses", img: "https://i.ibb.co/3hP8F0S/facebook.png" },
  { id: 7, name: "English ILTS", des: "10 Courses", img: "https://i.ibb.co/bgYHK1S/Ilits.png" },
  { id: 8, name: "Degital Margeting", des: "10 Courses", img: "https://i.ibb.co/5sn5SbH/flat-hand-drawn-online-business-meeting-illustration-1188-559-Copy.png" },
]
const Services = () => {
  return (
    <div className='services-container'>
    <div className="container">
      <div className="row px-4 py-4">
        <div className="col-md-6">
        <h6 className="service-sub">Services</h6>
        <h1 className="service-main">Explore Our Popular Services</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-3 mt-md-0">
          <button className="Free-Trial-button ms-0">Learn More</button>
        </div>
      </div>
        <div className="row">
          {
            services.slice(0,4).map(service => <Service
              key={service.id}
              service={service}
            ></Service>)
          }
      </div>
    </div>
  </div> 
  );
};

export default Services;