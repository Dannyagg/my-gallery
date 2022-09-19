import React from 'react';
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Shop() {

    const { items } = useContext(ProductsContext)
    const { Add } = useContext(ProductsContext)
    
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
                <h1>Shop</h1>

            </div>

            <div className="card-wrapper"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    padding: '10px',
                    color: 'white',
                    minHeight: 'calc(100vh - 34px)',

                }}>

                {items && items.map(({ category, description, id, image, price, rating, title }) => {
                    return (
                        <Card
                            key={id}
                            bg='light'
                            style={{
                                borderRadius: '10px',
                                width: '18rem',
                                height: '25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'black',
                                margin: '10px',
                                padding: '10px',
                                maxWidth: '20rem',
                                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

                            }}>
                            <Card.Img variant="top" src={image}
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
                                        fontSize: '14px'
                                    }}>
                                    {title}</Card.Title>

                                <Card.Text

                                    style={{
                                        color: 'black',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                    }}>
                                    <span>&#36;</span>
                                    {price}
                                </Card.Text>

                                <Card.Text
                                    style={{
                                        color: 'orange',
                                        fontSize: '14px',
                                    }}>
                                    Rating: {rating.rate}
                                </Card.Text>

                            </Card.Body>

                            <Button variant=""
                                key={id}
                                onClick={() => Add({ price, title })}
                                style={{
                                    backgroundColor: '#fb8d79',
                                    borderRadius: '10px',
                                    marginTop: 'auto',
                                    maxWidth: '120px',
                                    boxShadow: "rgba(14, 14, 14, 0.16) 0px 1px 4px",
                                }}>add to cart
                            </Button>
                        </Card>

                        

                    );
                }

                )}

            </div>

        </>

    )
}

export default Shop


//     <>
//     { cartItems && cartItems.map(({ price, title }) => {

//         return (
//             <>
//                 <Cart
//                     price={price}
//                     title={title}
//                 />
//             </>
//         )
//     }
//     )}
//             </>

// {/* <div
//                 className="order-summary"
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     flexWrap: 'wrap',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     padding: '10px',
//                     margin: '40px auto 100px auto',
//                     color: 'black',
//                     background: 'white',
//                     borderRadius: '20px',
//                     maxWidth: '20rem',
//                     boxShadow: "rgba(14, 14, 14, 0.16) 0px 1px 4px",
//                 }}>
//                 <h4>
//                     Order Summary
//                 </h4>
//                 <h6>
//                     Subtotal= {totalPrice}
//                 </h6>
//                 <Button variant=""
//                     style={{
//                         backgroundColor: "orange",
//                         marginTop: '10px',
//                         maxWidth: '200px',
//                     }}>proceed to checkout
//                 </Button>
//             </div> */}

