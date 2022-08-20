import React from 'react';
import "../../Styles/Review.css"
import ReviewIcon from './ReviewIcon';
const Review = ({ review }) => {
  const { des, img, name, desination } = review;
  return (
    <>
      <div className="reviews-posion"></div>
      <div className="col-lg-4 g-4 col-md-6">
        <div className="reviews-inner  p-5">
          <ReviewIcon />
          <div className="card-body">
            <p className="review-text">{des}</p>
          </div>
          <div className="d-flex ps-4 pb-4">
            <img src={img} alt="" />
            <div className='ms-4'>
              <h5 className="review-name">{name}</h5>
              <h6 className="review-title">{desination}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;