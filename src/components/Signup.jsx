import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ocean from '../images/ocean.jpg';



function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [username, setUsername] = useState('');
    const [createNewPassword, setCreateNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [createNewPasswordError, setCreateNewPasswordError] = useState('');
    const [ConfirmPasswordError, setConfirmPasswordError] = useState('');



    function handleSubmit(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <div className="signUp-wrapper"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '200px',
                color:'white'

            }}>

            <div>
                <Form
                    onSubmit={handleSubmit}
                    style={{
                        background: 'black',
                        // opacity: '0.9',
                        marginRight: '5px',
                        marginBottom: '5px',
                        padding: '50px',
                        width: '400px',
                        height: '600px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        borderRadius: '10px',

                    }} >

                    <Form.Text className="text-muted">
                        <h5
                            style={{

                                color: '#6f42c1',
                                textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                                marginBottom: '30px'
                            }}
                            > Welcome Back! </h5>

                        <h3
                            style={{
                                color: '#6f42c1',
                                textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                                marginBottom: '30px'
                            }}
                        >Sign In </h3>

                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                    <br />
                    <Button variant="outline-primary" type="submit"
                        style={{
                            marginTop: '10px',
                        }}>
                        Login
                    </Button>
                </Form>
            </div>

            <div>
                <Form
                    onSubmit={handleSubmit}
                    style={{
                        background: 'black',
                        marginRight: '5px',
                        marginBottom: '5px',
                        padding: '50px',
                        width: '400px',
                        height: '600px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        borderRadius: '10px',
                    }}>

                    <Form.Text className="text-muted">
                        <h3
                            style={{
                                color: '#6f42c1',
                                // textShadow: '4px 4px 4px #aaa',
                                marginBottom: '30px'
                            }}
                        > Create Account </h3>
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Create New Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={e => setCreateNewPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={e => setConfirmNewPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                    <br />
                    <Button variant="outline-primary" type="submit"
                        style={{
                            marginTop: '10px',
                         
                        }}>
                        Sign Up
                    </Button>
                </Form>
            </div>


            {/* <div
            
                style={{
                    color: '#6f42c1',

                }}
            
            >
                <h1>email: {email} </h1>
                <h1>password: {password} </h1>
                <h1>username: {username} </h1>
                <h1>createNewPassword: {createNewPassword} </h1>
                <h1>confirmNewPassword: {confirmNewPassword} </h1>

            </div> */}

        </div>
    );
}

export default Signup
