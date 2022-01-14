import React from 'react';
import ShopButton from './ShopButton';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Signup from './Signup';
import About from './About';
import { Error } from './Error';
import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import logo2 from '../images/logo2.png';
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

export default function Navigation(__props) {
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <Link to='/'>
                            <img src={logo2} alt=" sites-logo" className='navbar-logo'
                                style={{
                                    width: '150px',
                                    height: '80px',
                                    borderRadius: '20px',
                                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                    border: "2px solid #6610f2",

                                }}/>
                        </Link>

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
                            <Link to="/cart"> Cart <BiCartAlt /></Link>
                        </li>

                        <li>
                            <Link to="/login"> Login / Register <BiUser /></Link>
                        </li>
                    </ul>


                </nav>

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
                    <Route path="/login">
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
        </div>
    )
}
