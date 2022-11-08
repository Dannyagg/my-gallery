import React from 'react'
import { useState, useEffect, createContext } from 'react'
import ReactLoading from 'react-loading';


export const ProductsContext = createContext(null);
export const ProductsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const data = window.localStorage.getItem('cartItems');
        if (data !== null) setCartItems(JSON.parse(data));

    }, []);

    useEffect(() => {
        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

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

    function Add({ price, title, image}) {
        setCartItems((prevState) => [...prevState, { price, title, image}]);

    }

    return (

        <ProductsContext.Provider

            value={{ items, setItems, Add, cartItems, setCartItems }}>

            {children}

        </ProductsContext.Provider>

    )

}

export const ProductsConsumer = ProductsContext.Consumer
