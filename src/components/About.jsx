import React from 'react';
import Salina from '../images/Salina.jpg';


const About = () => {
    return (
        <div className="about-wrapper"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                // border: '2px solid red'
            }}
        >
            <div className="about-photo"
                style={{
                    marginBottom: '80px',
                    backgroundColor: 'black',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    border: '2px solid red',
                }}
            >
                <img src={Salina} alt="Girl in a jacket" width="500" height="600"

                    style={{
                        // border: '2px solid red',
                        borderRadius: '20px',
                        margin: '10px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                    }}

                />

                <div classNmae="about-message"

                    style={{
                        borderRadius: '20px',
                        border: '2px solid red',
                        width: '500px',
                        color: 'white',
                        margin: '120px',
                        padding: '20px'

                    }}
                >

                    <h1>
                        Salina Seals

                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus sunt iste incidunt? Natus architecto labore dignissimos
                        reprehenderit tenetur aperiam rem dolorum et libero,
                        dolore quas omnis sit, repellat praesentium nihil! </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus sunt iste incidunt? Natus architecto labore dignissimos
                        reprehenderit tenetur aperiam rem dolorum et libero,
                        dolore quas omnis sit, repellat praesentium nihil! </p>


                </div>
            </div>

        </div>
    )
}

export default About
