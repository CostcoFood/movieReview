import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList />
    </div>
  );
};

export default App;
