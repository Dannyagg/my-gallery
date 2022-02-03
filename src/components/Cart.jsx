import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Cart() {
    return (
       
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

            >
                <Card style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    borderRadius: '20px',
                    color: 'black',
                    margin: '10px',
                    padding: '20px',
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    width: '60rem'

                }}>
                    <Card.Img variant="" src="https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                        style={{
                            width: '20rem',
                            height: '15rem',
                            alignItems: 'center',

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
