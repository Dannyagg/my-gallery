import React from 'react';
import ExploreButton from './ShopButton';
// import diegoh from '../images/diegoh.jpg';

function Home() {

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    return (

        <>
            <div className="home-wrapper">
                <div className="slogan">
                    <h1
                    style={{
                        fontSize: '100px',
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                            margin: '20px'
                    }}
                    
                    > welcome to art-zibit 
                    </h1>
                    
                    <h2
                        style={{
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                        }}
                    
                    > dream .. imagine .. create </h2>

                    < ExploreButton />

                </div>

                {/* <div className="pencil-art" >
                    <img src={diegoh} alt="logo"
                        style={{
                            height: '700px',
                            width: '600px',
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                            borderRadius: '20px',
                            display: 'flex',
                           
                        }}

                    />
                </div> */}

            </div>

        </>

    )

}

export default Home




