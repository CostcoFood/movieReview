import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Inception',
            image: 'https://via.placeholder.com/150',
            synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
            rating: 4,
            reviews: []
        },
        {
            id: 2,
            title: 'Interstellar',
            image: 'https://via.placeholder.com/150',
            synopsis: 'A team of explorers travel through a wormhole in space...',
            rating: 5,
            reviews: []
        },
    ]);

    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} setMovies={setMovies} movies={movies} />
            ))}
        </div>
    );
};

export default MovieList;