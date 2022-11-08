import React from 'react'
import Button from 'react-bootstrap/Button';
import { ProductsContext } from '../context/ProductsContext';
import { useState } from 'react'
import { useContext } from 'react';

function Cart() {
    const [total, setTotal] = useState(null);
    const { cartItems } = useContext(ProductsContext)

    return (
        <>
            <div
                className="shop-header"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-10px',
                    flexWrap: 'wrap',
                    color: 'white',
                    backgroundColor: '#e9b14814',
                    textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                }} >

                <h1>Cart</h1>

            </div>

            <div
            className="cart-wrapper"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    padding: '10px',
                    color: 'black',
                    justifyContent: 'center',
                    background: 'white',
                    // boxShadow: "rgba(14, 14, 14, 0.16) 0px 1px 4px",
                }}>

                <div>

                    {cartItems.map(({ price, title }) =>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                padding: '0 10%',
                                color: 'black',
                                justifyContent: 'space-between',
                                background: 'white',
                                boxShadow: "rgba(14, 14, 14, 0.16) 0px 1px 4px",
                            }} >

                            <p>
                                {title}

                            </p>

                            <p>
                                <span>&#36;</span>{price}

                            </p>

                        </div>

                    )}

                </div>


                <div
                    className="order-summary"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: '10px',
                        margin: '20px auto 100px auto',
                        color: 'black',
                        background: 'white',
                        maxWidth: '20rem',
                    }}>
                    <h4>
                        Order Summary
                    </h4>
                    <h6>
                        Subtotal: <span>&#36;</span> {total}
                    </h6>
                    <Button variant=""
                        style={{
                            backgroundColor: '#fb8d79',
                            marginTop: '10px',
                            maxWidth: '200px',
                        }}> Checkout
                    </Button>
                </div>
            </div>


        </>

    )
}
export default Cart