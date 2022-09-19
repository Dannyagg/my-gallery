import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { ProductsContext } from '../context/ProductsContext';
// import { useState, useEffect, createContext } from 'react'
import { useContext } from 'react';

function Cart() {

    const { cartItems } = useContext(ProductsContext)

    return (
        <>
            <div
                className="shop-header"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-10px',
                    flexWrap: 'wrap',
                    color: 'white',
                    backgroundColor: '#e9b14814',
                    textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                }}
            >
                <h1>Cart</h1>
                <div>
                    {cartItems.map(({ price, title }) => 
                    <div>
                        <h5>
                            {title}
                            {price}
                        </h5>

                    </div>

                    )}
                </div>
            </div>


        </>

    )
}
export default Cart

// {
//     cartItems && cartItems.map(({ category, description, id, image, price, rating, title }) => {
//         return (

//             <Card
//                 style={{
//                     height: '60rem',
//                     backgroundColor: 'white',
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     flexDirection: 'row',
//                     color: 'black',
//                     margin: '10px',
//                     padding: '20px',
//                     boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//                     width: '60rem',
//                     maxWidth: '60rem',
//                     borderRadius: '10px',
//                     // backgroundColor: 'white',

//                 }}>
//                 {/* <Card.Img variant="" src="https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
//                             style={{
//                                 maxHeight: '10rem',
//                                 maxWidth: '12rem',
//                                 // alignItems: 'center',
//                                 // justifyContent: 'center',
//                             }}
//                         /> */}
//                 <Card.Body
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                     }}

//                 >
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Some quick
//                     </Card.Text>
//                     <Card.Text>
//                         {price}
//                     </Card.Text>
//                     <Card.Text>
//                         {title}
//                     </Card.Text>

//                 </Card.Body>

//                 <Button variant=""
//                     style={{
//                         Width: '120px',
//                         height: '50px',
//                         backgroundColor: "orange",

//                     }}
//                 >delete item</Button>
//             </Card>)
//     }

//     )
// } 