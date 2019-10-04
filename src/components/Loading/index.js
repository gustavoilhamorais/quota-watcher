import React from 'react';
import './index.css';

const Loading = ({ render, status }) => (
    status
        ? render
        : <div className="loader"></div>
);

export default Loading;