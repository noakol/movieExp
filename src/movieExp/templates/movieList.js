import React from 'react';
import MovieItem from './movieItem';

export default MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            {movies && movies.length && movies.map((movie) => {
                return (
                    <MovieItem {...movie} />
                );
            })}
        </div>
    );
}
