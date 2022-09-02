import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [emailError, setEmailError] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    const [username, setUsername] = useState('');
    const [createNewPassword, setCreateNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    // const [usernameError, setUsernameError] = useState('');
    // const [createNewPasswordError, setCreateNewPasswordError] = useState('');
    // const [ConfirmPasswordError, setConfirmPasswordError] = useState('');



    function handleSubmit(e) {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUsername('')
        setCreateNewPassword('')
        setConfirmNewPassword('')
        console.log('The button was clicked.');
    }



    return (
        <div id="signUp-wrapper"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                margin:'auto',
                color: 'white',
                minHeight: 'calc(100vh - 34px)'
                
            }}>

            <div>
                <Form
                    action='login'
                    method='post'
                    onSubmit={handleSubmit}
                    style={{
                        background: '#195E59',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))',
                        marginBottom: '5px',
                        padding: '20px',
                        maxWidth: '400px',
                        height: '600px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        borderRadius: '10px',
                        justifyContent: 'center',
                        alignItem: 'center',
                    }} >

                    <Form.Text className="text-muted">
                        <h3
                            style={{
                                color: 'white',
                                textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                                marginBottom: '30px'
                            }}
                        >Sign In </h3>

                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" autoComplete="false" value={email} required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" autoComplete="true" value={password} required
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
                        Sign In
                    </Button>

                    <div className='google-logins'
                        style={{
                            marginTop: '10px',

                        }}>

                    </div>

                </Form>
            </div>

            <div>
                <Form
                    action='login'
                    method='post'
                    onSubmit={handleSubmit}
                    style={{
                        background: '#195E59',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
                        padding: '20px',
                        maxWidth: '400px',
                        height: '600px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        borderRadius: '10px',
                     

                    }} >

                    <Form.Text className="text-muted">
                        <h3
                            style={{
                                color: 'white',
                                marginBottom: '30px'
                            }}
                        > Create Account </h3>
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" autoComplete="true" value={username} required
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Create New Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={createNewPassword} autoComplete="true" required
                            onChange={e => setCreateNewPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" autoComplete="true" value={confirmNewPassword} required
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

        </div>
    );
}

export default Signup
