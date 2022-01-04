import React from 'react';
import Mailto from 'reactv16-mailto';

function EmailMe(props) {
    return (

        <Mailto email={props.email} obfuscate={true} >
            Email me!
        </Mailto >
    )

}

export default EmailMe