import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, setMovies, movies }) => {
  // Function to update the rating of a movie
  const updateRating = (newRating) => {
    const updatedMovies = movies.map(m =>
      m.id === movie.id ? { ...m, rating: newRating } : m
    );
    setMovies(updatedMovies);
  };

  // Function to add a review to a movie
  const addReview = (review) => {
    const updatedMovies = movies.map(m =>
      m.id === movie.id ? { ...m, reviews: [...m.reviews, review] } : m
    );
    setMovies(updatedMovies);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      {/* Render the Stars component and pass the current rating and update function */}
      <Stars rating={movie.rating} updateRating={updateRating} />
      {/* Render the ReviewList component and pass the reviews array */}
      <ReviewList reviews={movie.reviews} />
      {/* Render the ReviewForm component and pass the addReview function */}
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;
