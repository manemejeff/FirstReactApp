import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Boy Next Door</h1>
            <h2>{allPosts} records, {liked } likes</h2>
        </div>
    )
}

export default AppHeader