import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  // State to handle the content of the review
  const [review, setReview] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave a review"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
