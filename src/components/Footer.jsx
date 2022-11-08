import React from 'react';

function Footer() {
    return (
        <div className='footer'
            style={{
                textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                position: 'relative',
                left: '0',
                right:'0',
                bottom: '0',
                width: '100%'
            }}
        >

            <div className='social'>
                <h5> Follow X-zibit </h5>
                                
                <a href='https://github.com/Dannyagg' target='_blank' className='fa fa-github' rel=" noopener noreferrer"> </a>
                <a href='https://www.linkedin.com/in/daniel-a-5a9294149/' target='_blank' className='fa fa-linkedin' rel=" noopener noreferrer"></a>
                <a href='https://github.com/Dannyagg' target='_blank' className='fa fa-facebook' rel="noopener noreferrer"></a>
                <a href='https://github.com/Dannyagg' target='_blank' className='fa fa-twitter' rel="noopener noreferrer"></a>
                <a href='https://github.com/Dannyagg' target='_blank' className='fa fa-youtube' rel=" noopener noreferrer"></a>
                <a href='https://github.com/Dannyagg' target='_blank' className='fa fa-instagram' rel="noopener noreferrer"></a>

            </div>
            <div className='design-team'>
                <p> &copy; {new Date().getFullYear()}  Daniel Agbenu | All Rights Reserved.</p>
                <div className='terms' >

                    <li><a href='https://github.com/Dannyagg' target='_blank' rel="noopener noreferrer">Terms and Conditions</a>
                    </li>
                    <li><a href='https://github.com/Dannyagg' target='_blank' rel="noopener noreferrer"> Cookie Policy </a> </li>

                </div>
            </div>

        </div>
    )

}

export default Footer