import React from 'react';
import ShopButton from './ShopButton';
import igorMiske from '../images/igorMiske.jpg';
import Comments from './Comments';

function Home() {

    return (

        <>

            <div
                className="shop-header"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-10px',
                    flexWrap: 'wrap',
                    color: 'white',
                    backgroundColor: '#e9b14814',
                    textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                }}
            >
                <h1>Home</h1>

            </div>
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
                <img src={igorMiske} alt="hero"
                    style={{
                        maxWidth: '100%',
                        width: '700px',
                        borderRadius: '2rem',
                        marginTop: '30px'

                    }}

                />
            </div>

            <div className="home-wrapper">
                <div className="slogan">
                    <h1
                        style={{
                            textShadow: '#fff9f9 0em 0em 5em',
                            margin: 'auto',
                            padding: 'auto',
                            color: '#ec6969'

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
                            color: '#ffffff9e'
                        }}

                    > dream .. imagine .. create</h2>


                    < ShopButton />

                </div>

            </div>
            <div>
                <Comments />

            </div>

        </>
    )

}

export default Home




