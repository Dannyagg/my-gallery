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
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

export default function Navigation(__props) {
    return (
        <div
        style={{
            // backgroundColor: 'whitesmoke'
    }}

        >
            <Router>
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
