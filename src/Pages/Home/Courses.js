import React from 'react';
import Course from './Course';
import "../../Styles/Courses.css"
const courses = [
  {
    id: 1,
    name: "Web Development",
    title: "The Complete JavaScript Course",
    price: "15.00",
    img: " https://i.ibb.co/ZhBYPVw/course-10.jpg",
  },
  {
    id: 2,
    name: "Web Design",
    title: "Web Design Master Class for Beginners",
    price: "29.00",
    img: "https://i.ibb.co/NYtNBdJ/course-9.jpg",
  },
  {
    id: 3,
    name: "Business",
    title: "Build Your Perfect Business Master Class",
    price: "Free",
    img: "https://i.ibb.co/dDJKksz/course-11.jpg",
  }
]
const Courses = () => {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="course-content mb-5">
      <h6 className="coures-sub">COURSES</h6>
        <h1 className="coures-main">Explore Popular Courses</h1>
      </div>
      <div className="row gy-4">
        {
          courses.map(course => <Course
            key={course.id}
            course={course}
          ></Course>)
        }
      </div>
    </div>
  );
};

export default Courses;