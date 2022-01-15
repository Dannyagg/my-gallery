import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import beFunky from '../images/beFunky.jpg';
import Form from 'react-bootstrap/Form';
import Ratings from './Ratings';

function Shop() {

    const [price, setPrice] = useState('$1000.00');
    const [quantity, setQuantity] = useState('');

    function handleSubmit(e) {
        setQuantity(e.target.value);
        e.preventDefault();
        console.log(`the button has been clicked`);
    }

    function handleChange(e) {
        setQuantity(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="exibit-wrapper"

            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                borderRadius: '20px',
                background: '#3F172C',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',

            }}

        >

            {itemCard()}
            {itemCard()}
            {itemCard()}
            {itemCard()}
          

        </div>
    )

    function itemCard() {

        return <Card

            // border="primary"
            style={{
                display:'flex',
                flexWrap:'wrap',
                width: '25rem',
                margin: '10px',
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                backgroundColor: 'whiteSmoke',
                borderRadius: '10px',
                padding: "10px",
                opacity: '1'
            }}>

            <Card.Img
                variant="top" src={beFunky}
                style={{
                    maxWidth: '60rem',
                    
                }} />

            <Card.Body

                style={{
                    padding: '10px',
                    // color: 'white'
                }}>

                <Card.Title>Katana Painting - Japan</Card.Title>

                <Card.Text

                    style={{

                        marginBottom: "10px",
                    }}>

                    Price: {price}

                </Card.Text>
                {/* <Form.Label>select quantity</Form.Label> */}
                <Form.Select
                    aria-label="Default select example"
                    size="sm"
                    value={quantity}
                    onChange={handleChange}
                    style={{
                        maxWidth: '140px',
                        marginBottom: "10px",
                    }}>
                    <option value="">select quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>

                <Button
                    style={{
                        maxWidth: '140px',
                    }}
                    onClick={handleSubmit}
                    variant="outline-primary"
                >add to cart</Button>
                <Ratings rating='' />
            </Card.Body>
        </Card>;

    }
}

export default Shop


