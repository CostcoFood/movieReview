import React, { useState } from 'react';

const Stars = ({ rating, updateRating }) => {
  // State to handle the hover effect for stars
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => updateRating(ratingValue)}
            />
            <span
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              style={{ color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
