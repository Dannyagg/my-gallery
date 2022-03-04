import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import ReactLoading from 'react-loading';

export const ProductsContext = React.createContext(null);

export const ProductsProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
        async function getData() {
            const response = await fetch("https://fakestoreapi.com/products?limit=5")
            const products = await response.json()
            setItems(products)
            console.log(products)
            setIsLoading(false)
            
        }

    }, []);

    return (
        <ProductsContext.Provider value={{ items, setItems, isLoading, setIsLoading }}>
            {children}
            
            <div
                className="loading"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                {isLoading &&

                    <ReactLoading type={'bubbles'} color='white' height={'20%'} width={'20%'} />
                }
            </div>

        </ProductsContext.Provider>

    )

}





