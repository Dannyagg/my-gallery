import './App.css';
import Navigation from './components/Navigation';
// import backgroundImage from './images/background.jpg';
// import Comments from './components/Comments';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import logo from './images/logo.png';
// import background from './images/tampabackground.jpg';
// import backgroundImage from './images/background.jpg';

function App() {

    return (

        <div className="App">
            <Navigation />
            {/* {Banner()} */}
            {Footer()}
            {Comments()}
            {/* <Comments /> */}
        </div>

    );
}

export default App;

// function Banner() {
//     return <div className="banner"
//         style={{
//             backgroundImage: `url(${backgroundImage})`,
//             backgroound: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
//             backgroundSize: "cover",
//             height: "300px",
//             // width:'400px',
//             margin: "auto",
//             position: 'static',
            
//         }}
//         >

//         <h1 className="headline"> art-zibit </h1>

//     </div>
// }


function Footer() {
    return (
        <div className="footer"
            style={{
                marginTop: '300px',
                textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
              
            }}
        >
            <div className="design-team">

                <p> &#169; DevCorp 2021 | All Rights Reserved.</p>
                <div className="terms" >

                    <li><a href="#" target="_blank">Terms and Conditions |</a> </li>
                    <li><a href="#" target="_blank">Cookie Policy </a> </li>

                </div>

                <div className="social">
                    <h4> Follow art-zibit </h4>

                    <a href="https://www.facebook.com/ddenasty" target="_blank" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="fa fa-twitter"></a>
                    <a href="https://www.linkedin.com/company/spacex/" target="_blank" className="fa fa-linkedin"></a>
                    <a href="https://www.youtube.com/user/spacexchannel" target="_blank" className="fa fa-youtube"></a>
                    <a href="https://www.instagram.com/spacex/" target="_blank" className="fa fa-instagram"></a>

                </div>
                {/* <div><img src={logo} alt=" BigCo Inc. logo" /> </div> */}
            </div>

        </div>
    )
}


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
                        variant="primary"
                        type="submit"
                        size="lg"
                        style={{
                            width: '150px',
                            padding: '20px',
                            margin: '10px auto',
                            justifyContent: 'center',
                            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                            borderRadius: '20px',

                        }}>
                        POST
                    </Button>
                </Form.Group>
            </Form>

            {/* <hr /> */}

        </div>
    )
}

