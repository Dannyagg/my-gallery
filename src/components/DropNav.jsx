import React from 'react';
import Home from './Home';
import ShopButton from './ShopButton';
import Shop from './Shop';
import Cart from './Cart';
// import Test from './Test';
import Signup from './Signup';
import About from './About';
import { Error } from './Error'
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import { ProductsContext } from '../context/ProductsContext';
import { useContext } from 'react';

import {
    Route, Routes
} from 'react-router-dom';
;

function DropNav() {
    const { cartItems } = useContext(ProductsContext)

    return (

        <>
            <Navbar bg="" expand={false} >
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link href="/"
                            style={{
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                color: '#ec6969',
                            }}>
                            Xzibit

                        </Nav.Link>
                    </Navbar.Brand>

                    <div className='nav-mid'
                        style={{
                            alignItem: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: 'magenta',
                            gap: '1rem'
                        }}
                    >

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/cart">

                            <Button variant=""
                                className='cart-btn'
                                style={{
                                    color: 'white',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}> Cart <BiCartAlt />
                                <span
                                    style={{
                                        position: 'relative',
                                        bottom: '8px',
                                        right: '3px',
                                        fontWeight: 'bold',
                                        color: '#803906',
                                        backgroundColor: 'whitesmoke',
                                        borderRadius: '20px',
                                        padding: '0px 7px',


                                    }}

                                >{cartItems.length}</span>
                                
                            </Button>

                        </Nav.Link>
                        
                        <Nav.Link href="/about">About</Nav.Link>

                        <Nav.Link href="/signup"> <BiUser />Login</Nav.Link>


                        {/* <Nav.Link href="/test">Test</Nav.Link> */}

                    </div>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end">

                        <Offcanvas.Header closeButton >
                            <Nav.Link href="/"
                                style={{
                                    textDecoration: 'none',
                                    color: '#ff3515',
                                    fontWeight: 'bold',
                                }}>
                                Xzibit
                            </Nav.Link>

                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/shop">Shop</Nav.Link>
                                
                                <Nav.Link href="/cart">

                                    <Button variant=""
                                        className="cart-btn"
                                        style={{
                                            color: 'white',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '0',

                                        }}> Cart <BiCartAlt />
                                        <span
                                            style={{
                                                position: 'relative',
                                                bottom: '8px',
                                                right: '6px',
                                                fontWeight: 'bold',
                                                color: '#803906',
                                                backgroundColor: 'whitesmoke',
                                                borderRadius: '20px',
                                                padding: '0px 7px',

                                            }}

                                        >{cartItems.length} </span>
                                    </Button>

                                </Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/signup">Login</Nav.Link>
                                {/* <Nav.Link href="/test">Test</Nav.Link> */}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Routes>

                <Route>

                    <Route path="/" element={<Home />} />

                    <Route path="/shop" element={<Shop />} />

                    <Route path="/shop" element={<ShopButton />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/signup" element={<Signup />} />

                    <Route path="/cart" element={<Cart />} />

                    {/* <Route path="/checkout" element={<Checkout />} /> */}

                    <Route path="*" element={<Error />} />
                </Route>

            </Routes>

        </>

    )

}

export default DropNav