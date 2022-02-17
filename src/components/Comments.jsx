import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Comments() {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    // const [emailError, setEmailError] = useState('');
    // const [commentError, setCommentError] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, comment);
        setEmail('');
        setComment('');
        console.log('The link was clicked.');
    }

    return (

        <div className='comments'
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                marginTop: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '10px',
                color: 'white',
                position: 'relative',
                left: '0',
                bottom: '0',
            }}
        >
            <h4
                style={{
                    margin: '10px auto',
                }}> Leave a comment

            </h4>

            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Your email</Form.Label>
                    <Form.Control
                        type='email'
                        value={email}
                        // placeholder='enter your email address'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>

                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        // placeholder='enter email content' 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <Form.Check
                        type='checkbox'
                        label='Subscribe to artZibit newsletter'
                        style={{
                            margin: ' 10px auto',
                        }}

                    />
                    <Button
                        variant='primary'
                        type='submit'
                        style={{
                            hover: 'black',
                            width: '100px',
                            padding: '15px',
                            margin: '10px auto',
                            alignItem: 'center',
                            justifyContent: 'center',
                            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                            borderRadius: '10px',

                        }}>
                        POST
                    </Button>
                </Form.Group>
            </Form>

        </div>
    )
}

export default Comments