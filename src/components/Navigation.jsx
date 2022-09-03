import React from 'react';
import Home from './Home';
import ShopButton from './ShopButton';
import Shop from './Shop';
import Cart from './Cart';
import Signup from './Signup';
import About from './About';
import Test from './Test';
import { Error } from './Error';
import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { Routes, Route, Link } from 'react-router-dom';


export default function Navigation(__props) {
    const cartValue = '5'
    return (
        <>
            <Routes>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/cart"> Cart <BiCartAlt />

                                <span
                                    className="cart-value"
                                    style={{
                                        display: 'inline',
                                        position: 'relative',
                                        // bottom: '12px',
                                        // right: '5px',
                                        borderRadius: '40%',
                                        backgroundColor: 'orange',
                                        padding: '2px 4px',
                                        color: 'white',
                                        // minWidth: '300px',
                                        fontSize: '15px'
                                    }}
                                >{cartValue}</span>

                            </Link>
                        </li>

                        <li>
                            <Link to="/signup"> <BiUser /> Login/Register </Link>
                        </li>

                        <li>
                            <Link to="/test">Test</Link>
                        </li>

                    </ul>

                </nav>

                <Routes>
                    <Route>
                        <Route path="/" element={<Home />} />

                        <Route path="/shop" element={<Shop />} />

                        <Route path="/shop" element={<ShopButton />} />

                        <Route path="/test" element={<Test />} />

                        <Route path="/about" element={<About />} />

                        <Route path="/signup" element={<Signup />} />

                        <Route path="/cart" element={<Cart />} />

                        <Route path="/test" element={<Test />} />

                        <Route path="*" element={<Error />} />

                    </Route>

                </Routes>
            </Routes>

        </>
    )

}