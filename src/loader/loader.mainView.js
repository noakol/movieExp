import React from 'react';

export default function Loader({count}) {
    const loader = (
        <div className="loader-wrapper">
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );

    return (
        count ? loader : null
    );
}
