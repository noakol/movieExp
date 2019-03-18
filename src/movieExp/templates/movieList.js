import React from 'react';
import MovieItem from './movieItem';

export default function MovieList({
    movies,
    noDataFoundIndicator,
    handleShowMore
}) {

    const NotFoundMarkup = () => {
        return noDataFoundIndicator && !movies && <h1>Movie Not Found!</h1> || null;
    };

    const StartSearchMarkup = () => {
        return !noDataFoundIndicator && !movies && <h1>Enter Text Find Movies</h1> || null;
    };

    const ButtonMarkup = () => {
        return movies && movies.length !== 0 && !noDataFoundIndicator && 
            <button onClick={handleShowMore}>Show More</button> || null;
    }
    
    return (
        <div className="movie-list-container">
            <StartSearchMarkup />
            <NotFoundMarkup />
            <ul className="movie-list">
                {movies && movies.length !== 0 && movies.map((movie, index) => {
                    return (
                        <MovieItem {...movie} key={index} />
                    );
                })}
            </ul>
            <ButtonMarkup />
        </div>
    );
}

