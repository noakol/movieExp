import React from 'react';
import SearchBox from './components/searchBox.component';
import MovieList from './templates/movieList';

export default function movieExpMainView({
    movieList,
    updateSearchResults,
    noDataFoundIndicator,
    clearNotFoundMess,
    handleShowMore
}) {
    return (
        <div className="main-container">
            <SearchBox 
                updateSearchResults={updateSearchResults}
                clearNotFoundMess={clearNotFoundMess} />
            <MovieList 
                movies={movieList} 
                noDataFoundIndicator={noDataFoundIndicator} 
                handleShowMore={handleShowMore} />
        </div>
    );
}