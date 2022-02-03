import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

import Home from './Home';
import ShopButton from './ShopButton';
import Shop from './Shop';
import Cart from './Cart';
import Signup from './Signup';
import About from './About';
import { Error } from './Error';

function DropNav() {
    return (

        <>
            <Navbar bg="light" expand={false}
            >
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link href="/"
                            style={{
                                textDecoration: 'none',
                                color: 'purple',
                                fontWeight: 'bold',
                            }}>
                            X-zibit
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end">
                        
                        <Offcanvas.Header closeButton>
                            <Nav.Link href="/"
                                style={{
                                    textDecoration: 'none',
                                    color: 'purple',
                                    fontWeight: 'bold',
                                }}>
                                X-zibit
                            </Nav.Link>

                        </Offcanvas.Header>
                        
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/shop">Shop</Nav.Link>
                                <Nav.Link href="/cart">Cart</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
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