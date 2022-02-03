import React from 'react';
import ShopButton from './ShopButton';


function Home() {

    return (

        <>
            <div className="home-wrapper">
                <div className="slogan">
                    <h1
                    style={{
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                            margin: 'auto',   
                            padding:'auto',  
                          
                                    
                    }}
                    
                    > Welcome to X-zibit 
                    </h1>
                    
                    <h2
                        style={{
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 'auto',  

                        }}
                    
                    > dream .. imagine .. create</h2>

                    < ShopButton />

                </div>

        

            </div>

        </>

    )

}

export default Home




