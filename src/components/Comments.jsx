import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import Ratings from 'Ratings';

function Comments() {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [emailError, setEmailError] = useState('');
    const [commentError, setCommentError] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    // // function handleClick(e) {
    // //     e.preventDefault();
    // //     console.log('The link was clicked.');
    // }
    return (

        <div className="comments"
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '500px',
                margin: '10px auto',
                padding: '10px',
                color:'white',
                
            }}
        >
            <h4
                style={{
                    margin: '10px auto',
                }}> Get in touch

            </h4>

            <Form
            onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        // placeholder="enter your email address"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email Content</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={3} 
                    // placeholder="enter email content" 
                  
                        onChange={e => setComment(e.target.value)}
                    />
                    <Form.Check
                        type="checkbox" 
                        label="Subscribe to art-zibit newletter"
                        style={{
                            margin: ' 10px auto',
                        }}

                    />
                    <Button
                        // onClick={handleClick}
                        // variant="primary"
                        type="submit"
                        size="lg"
                        style={{
                            backgroundColor: 'transparent',
                            padding: '10px',
                            margin: '10px auto',
                            justifyContent: 'center',
                            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'

                        }}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>

            {/* <hr /> */}

        </div>
    )
}

export default Comments


