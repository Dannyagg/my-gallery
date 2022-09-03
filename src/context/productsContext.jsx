import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
// import ReactLoading from 'react-loading';

export const ProductsContext = React.createContext(null);

export const ProductsProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
        async function getData() {
            const response = await fetch("https://fakestoreapi.com/products?limit=9")
            const products = await response.json()
            setItems(products)
            console.log(products)
            setIsLoading(false)

        }

    }, []);

    const productDetail = () => {
            console.log('for detail of products')
    }

    const addToCart = () => {
            console.log('add to cart')
    }
    const removeFromCart = () => {

            console.log('removing from cart')
    }

    return (
        <ProductsContext.Provider value={{
            items, setItems,
            productDetail,
            addToCart,
            removeFromCart

        }}>
            {children}

        </ProductsContext.Provider>

    )

}
export const ProductsConsumer = ProductsContext.Consumer





