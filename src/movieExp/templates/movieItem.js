import React from 'react';

export default function MovieBox({poster, title}) {
    return (
        <li className="movie-item">
            <img src={poster} />
            <h1>{title}</h1>
        </li>
    );
}
