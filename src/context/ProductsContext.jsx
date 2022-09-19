import React from 'react'
import { useState, useEffect, createContext } from 'react'
import ReactLoading from 'react-loading';
import Cart from '../components/Cart';
// import Button from 'react-bootstrap/Button';

export const ProductsContext = createContext(null);
export const ProductsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (cartItems) {
            setCartItems(cartItems);
        }
    }, []);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://fakestoreapi.com/products?limit=2")
            const products = await response.json();
            setItems(products);
            console.log(products)
            setIsLoading(false)
        }

        getData()

    }, []);

    function Add({ price, title }) {
        setCartItems((prevState) => [...prevState, { price, title }]);

        // return <Cart 
        // price={price}
        // title={title}
        // />
    }

    return (

        <ProductsContext.Provider

            value={{ items, setItems, Add, cartItems, setCartItems }}>

            {children}

        </ProductsContext.Provider>

    )

}

export const ProductsConsumer = ProductsContext.Consumer

