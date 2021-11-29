import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Route, Switch, Link, Redirect
} from 'react-router-dom';

function ExploreButton() {

    return (
        <>
            <Link to="/shop" >

                <Button
                    classNmae="shop-btn"
                    // variant="primary"
                    size="lg"
                    style={{
                        textTransform: 'uppercase',
                        borderRadius: '20px',
                        border: '3px solid purple',
                        marginTop: '30px',
                        padding: '15px',
                        width: '250px',
                        textDecoration:'none',
                        backgroundColor: 'transparent',
                        color: 'white',
                        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                
                    }}>
                    Shop
                </Button>
            </Link>
        </>
    );
}

export default ExploreButton

