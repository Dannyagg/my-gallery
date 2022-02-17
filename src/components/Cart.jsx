import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cart() {
    return (

        <div className="cart-wrapper"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: 'calc(100vh - 34px)',
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
                    borderRadius: '10px',
                }}>
                <Card.Img variant="" src="https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                    style={{
                        maxHeight: '10rem',
                        maxWidth: '12rem',
                        // alignItems: 'center',
                        // justifyContent: 'center',
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


                </Card.Body>

                <Button variant=""
                    style={{
                        Width: '120px',
                        height: '50px',
                        backgroundColor: "orange",

                    }}
                >delete item</Button>
            </Card>

        </div>


    )
}
export default Cart