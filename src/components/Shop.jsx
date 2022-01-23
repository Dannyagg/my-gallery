import React from 'react';
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Ratings from './Ratings'

function Shop() {

    const [storeItems, setStoreItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
        async function getData() {
            const response = await fetch("https://fakestoreapi.com/products/")
            const data = await response.json()
            console.log(data)
            setStoreItems(data)
            setIsLoading(false)
        }

    }, []);

    return (
        <>
        <div>
            {isLoading && 
            
            <h4> Getting Data </h4>
            }
        </div>

            <div
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

            <div className="wrapper"
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
                        style={{
                            // background:'#3D3D3D',
                            borderRadius:'20px',
                            width: '23rem',
                            height: '45rem',
                            display: 'flex',
                            color: 'black',
                            margin: '10px',
                            padding:'20px',
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

                        }}>
                        <Card.Img variant="top" src={item.image}
                            style={{
                       
                                height: '400px',
                                alignItems: 'center',
                                paddingBottom:'5px',
                                borderRadius: '20px',
                                // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                
                            }} />

                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text
                                style={{
                                    color: 'black',
                                    fontSize:'2rem',
                                }}>
                                <span>&#36;</span>{item.price}
                            </Card.Text>
                            <Card.Text>
                                rating:{item.rating.rate}
                            </Card.Text>


                            <Card.Text>

                            </Card.Text>

                            <Button variant=""
                                style={{
                                    
                                    backgroundColor: "orange",
                                    marginTop: 'auto',
                                    maxWidth: '150px',
                                }}>add to cart</Button>

                        </Card.Body>
                    </Card>

                )

                )}
            </div>

        </>

    )
}

export default Shop
