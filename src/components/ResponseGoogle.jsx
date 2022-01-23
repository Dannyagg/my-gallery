import React from 'react';
import { GoogleLogin } from 'react-google-login';

function ResponseGoogle(response) {
    console.log(response);

    return (

        <GoogleLogin
            clientId={process.env.REACT_APP_API_KEY_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
       
        
        );

}
export default ResponseGoogle

