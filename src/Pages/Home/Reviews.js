import React from 'react';
import "../../Styles/Reviews.css"
import Review from './Review';
import review from "../../Review/reviews1.png"
import review2 from "../../Review/reviews2.png"
import review3 from "../../Review/reviews3.png"
import { Navigate, useNavigate } from 'react-router-dom';
const reviews = [
  { id: 1, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: review },
  { id: 2, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: review2 },
  { id: 3, name: "Carter Franci", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum mattis faucibus", desination: "Los Angeles, CA", img: review3 }
]
const Reviews = () => {
  const navigate = useNavigate()
  return (
    <div className="reviews">
      <div className="container">
        <div className="row px-4 py-4">
          <div className="col-md-6">
            <h6 className="service-sub">TESTIMONIAL</h6>
            <h1 className="service-main">What Says Our Students</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-3 mt-md-0">
            <button className="Free-Trial-button ms-0">Veiw More</button>
          </div>
        </div>
        <div>
          <div className="row">
            {
              reviews.map(review => <Review
                key={review.id}
                review={review}
              ></Review>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;