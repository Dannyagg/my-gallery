import React from 'react';
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactLoading from 'react-loading';
// import Ratings from './Ratings'

function Shop() {

    const [storeItems, setStoreItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState('$0.00')


    useEffect(() => {
        getData()
        async function getData() {
            const response = await fetch("https://fakestoreapi.com/products?limit=2")
            const data = await response.json()
            console.log(data)
            setStoreItems(data)
            setIsLoading(false)
        }

    }, []);

    return (
        <>           
            <div
                className="shop-header"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '10px',
                    color: 'white',
                    textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                }}
            >
                <h1>SHOP </h1>

            </div>

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


            <div className="card-wrapper"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '10px',
                    color: 'white',
                }}

            >
                {storeItems.map((item) => (

                    <Card key={item.id}
                        bg='light'
                        style={{
                            borderRadius: '20px',
                            width: '20rem',
                            height: '27rem',
                            display: 'flex',
                            flexDirection:'column',
                            color: 'black',
                            margin: '10px',
                            padding: '10px',
                            maxWidth:'20rem',
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

                        }}>
                        <Card.Img variant="top" src={item.image}
                            style={{
                                height: '200px',
                                width: '180px',
                                margin: 'auto'
                            }} />

                        <Card.Body
                            style={{
                                margin: 'auto',
                                // padding:'auto 0',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Card.Title
                            
                             style={{
                                    color: 'black',
                                    fontSize:'14px'
                                }}>
                            {item.title}</Card.Title>

                            <Card.Text
                                style={{
                                    color: 'black',
                                    fontSize: '1rem',
                                }}>
                                <span>&#36;</span>{item.price}
                            </Card.Text>

                            <Card.Text
                            
                             style={{
                                    color: 'black',
                                    fontSize: '14px',
                                }}>
                            
                                rating:{item.rating.rate}
                            </Card.Text>

                            <Button variant=""
                                style={{
                                    backgroundColor: "orange",
                                    marginTop: 'auto',
                                    maxWidth: '120px',
                                }}>add to cart
                            </Button>
                        </Card.Body>
                    </Card>

                )

                )}
            </div>

            <div
                className="order-summary"
                style={{

                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    margin: 'auto',
                    color: 'black',
                    background: 'white',
                    borderRadius: '20px',
                    maxWidth: '20rem',
                    boxShadow: "rgba(14, 14, 14, 0.16) 0px 1px 4px",

                }}>
                <h4>
                    Order Summary
                </h4>
                <h6>
                    Subtotal= {totalPrice}
                </h6>

                <Button variant=""
                    style={{
                        backgroundColor: "orange",
                        marginTop: '10px',
                        maxWidth: '200px',
                    }}>proceed to checkout
                </Button>

            </div>

            {Cart()}


        </>

    )
}

export default Shop

function Cart() {
    return (

        <div className="cart-wrapper"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }}

        >
            <Card 
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                color: 'black',
                margin: '10px',
                padding: '20px',
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                width: '60rem',
                maxWidth: '60rem',
                borderRadius: '20px',
            }}>
                <Card.Img variant="" src="https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                    style={{
                        maxWidth: '10rem',
                        maxHeight: '10rem',
                        width: '15rem',
                        alignItems: 'center',
                        justifyContent: 'center',                  
                    }}
                />
                <Card.Body
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}

                >
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick
                    </Card.Text>
                    <Card.Text>
                        price
                    </Card.Text>
                    <Card.Text>
                        quantity
                    </Card.Text>

                    <Button variant=""
                        style={{
                            maxWidth: '120px',
                            backgroundColor: "orange",
                            
                        }}
                    >delete item</Button>
                </Card.Body>
            </Card>
        </div>


    )
}
