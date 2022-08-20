import React from 'react';
import "../../Styles/About.css"

const abouts = [
  { id: "1", name: "High Quality Courses", des: "The quality of the courses has created a lot of interest among the students", img: "https://i.ibb.co/W0ZQJFw/garenty.png" },
  { id: "2", name: "Expert Instructors .", des: "The courses are conducted by various experienced Instructors", img: "https://i.ibb.co/Bt4fNMm/Expert.png" },
  { id: "3", name: "Life Time Access . ", des: "The course will have lifetime access and can be revisited at any time .", img: "https://i.ibb.co/TTHHYvY/Access.png" }
]

const About = () => {
  return (
    <div className="container my-5 pt-5">
      <div>
        <h6 className="share-sub-title">BEST LEARNING PLATFORM</h6>
        <h1 className="share-main-title">Why We Are The Best</h1>
      </div>
      <div className="row">
        {
          abouts.map(about =>
            <div className="col-lg-4 mt-5 col-md-6" key={about.id}>
              <div className="card border-0 p-4 gap-2 shadow">
                <img className="img-content shadow" src={about.img} alt=""/>
                <div className="card-body p-0">
                  <h5 className="title">{about.name}</h5>
                  <p className="text">{about.des}</p>
                </div>
              </div>
            </div >
          )
        }
      </div>
    </div>
  );
};

export default About;