import React from 'react';
import ExploreButton from './ShopButton';

function Home() {

    return (

        <>
            <div className="home-wrapper">
                <div className="slogan">
                    <h1
                    style={{
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                            margin: 'auto',      
                            justifyContent: 'center',
                            alignItems:'center', 
                                    
                    }}
                    
                    > welcome to artZibit 
                    </h1>
                    
                    <h2
                        style={{
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 'auto',  

                        }}
                    
                    > dream .. imagine .. create </h2>

                    < ExploreButton />

                </div>

        

            </div>

        </>

    )

}

export default Home




