import React from 'react';
import "../../Styles/Reviews.css"
import Review from './Review';
import review from "../../Review/reviews1.png"
import review2 from "../../Review/reviews2.png"
import review3 from "../../Review/reviews3.png"
const reviews = [
  { id: 1, name: "Carter Franci", des: "The courses are excellent and the instructor's understanding is really visionary which helps a lot in understanding difficult topics", desination: "USA", img: review },
  { id: 2, name: "Pretty Jints", des: "I didn't understand JavaScript problem-solving but the JavaScript tasks were at a really high level which helped my skill development a lot..", desination: "India", img: review2 },
  { id: 3, name: "Mss.Sabonti", des: "At first I didn't have that much skill but after doing this course I learned a lot of skills and the pain is really amazing", desination: "Bangladesh", img: review3 }
]
const Reviews = () => {
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