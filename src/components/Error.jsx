import React from "react";
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div>
            <h1> 404 - Resource not found </h1>
            <Link to="/">
                Go to Home page 
            </Link>
        </div>
    )
}

export { Error };