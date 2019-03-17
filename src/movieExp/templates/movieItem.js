import React from 'react';

export default MovieBox = ({poster, title}) => {
    return (
        <div className="movieItem">
            <img src={poster} />
            <h1>{title}</h1>
        </div>
    );
}
