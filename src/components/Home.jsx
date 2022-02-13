import React from 'react';
import ShopButton from './ShopButton';
import igorMiske from '../images/igorMiske.jpg';


function Home() {

    return (

        <>
            <div
                className='hero-img'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    margin: 'auto',

                }}
            >
                <img src={igorMiske} alt="hero-image"
                    style={{
                        maxWidth: '100%',
                        width:'800px',
                        borderRadius: '2rem',
                        marginTop:'40px'

                    }}

                />
            </div>

            <div className="home-wrapper">
                <div className="slogan">
                    <h1
                        style={{
                            textShadow: '#fff9f9 0em 0em 5em',
                            // textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                            margin: 'auto',
                            padding: 'auto',
                            color:'#ec6969'

                        }}

                    > Welcome to Xzibit
                    </h1>

                    <h2
                        style={{
                            display: 'flex',
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                            justifyContent: 'center',
                            align: 'center',
                            margin: 'auto',
                            color:'#ffffff9e'
                        }}

                    > dream .. imagine .. create</h2>


                    < ShopButton />

                </div>



            </div>

        </>

    )

}

export default Home




  