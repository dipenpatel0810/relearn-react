import React from 'react';
import Unsplash from 'react-unsplash-wrapper';

export default function UnsplashHome() {
    const count = [...new Array(10)].fill(1);
    console.log("COUNT", count);
    return (
        <React.Fragment>
            {
                count.map(e => (<Unsplash></Unsplash>))
            }
        </React.Fragment>
    );
}