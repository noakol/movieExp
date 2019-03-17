import React from 'react';
import SearchBox from './components/searchBox.component';
import MovieList from './templates/movieList';

export default movieExpMainView = ({movieList}) => {
    return (
        <div className="main-container">
            <SearchBox />
            <MovieList movies={movieList} />
        </div>
    );
}