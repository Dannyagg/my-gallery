import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function App() {

    return (

        <div className="App">
            <Navigation />
            {Comments()}
            {Footer()}

        </div>

    );
}

export default App;

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

        <div className="comments"
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '500px',
                marginTop: '100px',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '10px',
                color: 'white',
            
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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        // placeholder="enter your email address"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        // placeholder="enter email content" 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Subscribe to artZibit newsletter"
                        style={{
                            margin: ' 10px auto',
                        }}

                    />
                    <Button
                        variant="primary"
                        type="submit"
                        style={{
                            width: '150px',
                            padding: '20px',
                            margin: '10px auto',
                            alignItem:'center',
                            justifyContent: 'center',
                            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                            borderRadius: '20px',

                        }}>
                        POST
                    </Button>
                </Form.Group>
            </Form>

        </div>
    )
}


function Footer() {
    return (
        <div className="footer"
            style={{
                // marginTop: '20px',
                textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

            }}
        >
            <div className="design-team">

                <p> &copy; {new Date().getFullYear()}  DevCorp | All Rights Reserved.</p>
                <div className="terms" >

                    <li><a href="https://github.com/Dannyagg" target="_blank">Terms and Conditions |</a> </li>
                    <li><a href="https://github.com/Dannyagg" target="_blank">Cookie Policy </a> </li>

                </div>

                <div className="social">
                    <h4> Follow art-zibit </h4>

                    <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/daniel-a-5a9294149/" target="_blank" className="fa fa-linkedin"></a>
                    <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-facebook"></a>
                    <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-twitter"></a>
                    <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-youtube"></a>
                    <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-instagram"></a>

                </div>
            </div>

        </div>
    )
}