import React from 'react';
import Home from './Home';
import ShopButton from './ShopButton';
import Shop from './Shop';
import Cart from './Cart';
import Signup from './Signup';
import About from './About';
import { Error } from './Error'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'

import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom';
;

function DropNav() {

    const [cartItemNumber, setCartItemNumber] = useState('0')

    return (

        <>
            <Navbar bg="" expand={false}
            >
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
                        <Nav.Link href="/signup"> <BiUser />Login</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>

                        <Nav.Link href="/cart">

                            <Button variant=""
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
                                        color: 'black',
                                        backgroundColor: 'whitesmoke',
                                        borderRadius: '20px',
                                        padding: '0px 7px',
                                       
                                       
                                    }}

                                >{cartItemNumber} </span>
                            </Button>

                        </Nav.Link>


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
                                style={{
                                    color: 'white',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding:'0',
                                  
                                }}> Cart <BiCartAlt />
                                <span
                                    style={{
                                        position: 'relative',
                                        bottom: '8px',
                                        right: '6px',
                                        fontWeight: 'bold',
                                        color: 'black',
                                        backgroundColor: 'whitesmoke',
                                        borderRadius: '20px',
                                        padding: '0px 7px',
            
                                    }}

                                >{cartItemNumber} </span>
                            </Button>

                                </Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/signup">Login</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Router>

                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/shop">
                        <Shop />
                    </Route>

                    <Route path="/shop">
                        <ShopButton />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="*">
                        <Error />
                    </Route>

                </Switch>

            </Router>

        </>

    )

}

export default DropNav