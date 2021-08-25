import React from 'react';
import './errorMessage.css';
import img from './error.jpg';



const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="img"></img>
            <span>Something go wrong</span>
        </>
        )
}

export default ErrorMessage;