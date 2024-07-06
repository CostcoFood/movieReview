import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {/* Map through reviews array and render a Review component for each */}
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
