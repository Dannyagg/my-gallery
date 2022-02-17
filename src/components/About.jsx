/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Salina from '../images/Salina.jpg';
import Dan from '../images/Dan.jpg';
import EmailMe from '../components/EmailMe';


const About = () => {
    return (
        <div className="about-wrapper"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                margin:'80px auto 100px auto',
                minHeight: 'calc(100vh - 34px)',
            }}
        >

            {/* ABOUT DAN */}

            <div className="about-photo"
                style={{

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '20px',
              
                    
                }}
            >
            <img src={Dan} alt="my photo" 

                style={{
                    width: '18rem',
                    height: '25rem',
                    borderRadius: '20px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    
                }}
            />

            <div className="about-message"

                style={{
                    maxWidth: '300px',
                    color: 'white',
                    margin: 'auto',
                    padding:'10px',
                    borderRight:'1px solid',
                    
                    
                }}
            >

                <h2>Daniel Agbenu Jr.</h2>

                <hr />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus sunt iste incidunt? Natus architecto labore dignissimos
                    reprehenderit tenetur aperiam rem dolorum et libero,
                    dolore quas omnis sit, repellat praesentium nihil! </p>

                <hr />

                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                    }}
                >
                    <div className="about-media">
                        <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-github" rel="noreferrer"></a>
                        <a href="https://www.linkedin.com/in/daniel-a-5a9294149/" target="_blank" className="fa fa-linkedin" rel="noreferrer"></a>
                        <a href="#" target="_blank" className="fa fa-twitter"></a>
              

                        <div className="email-me">
                            <EmailMe
                                email="borgadee@gmail.com"
                            />
                               
                        </div>

                    </div>

                </div>
            </div>
        </div>

            {/* ABOUT Salina */}

            <div className="about-photo"
                style={{

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '20px',

                }}
            >
                <img src={Salina} alt="my photo"

                    style={{
                        width: '18rem',
                        height: '25rem',
                        borderRadius: '20px',
                        // border:'5px solid #ec6969',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

                    }}
                />

                <div className="about-message"

                    style={{
                        maxWidth: '300px',
                        color: 'white',
                        margin: 'auto',
                        padding: '10px',
                        borderRight: '1px solid'

                    }}
                >

                    <h2>Salina Seals</h2>

                    <hr />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus sunt iste incidunt? Natus architecto labore dignissimos
                        reprehenderit tenetur aperiam rem dolorum et libero,
                        dolore quas omnis sit, repellat praesentium nihil! </p>

                    <hr />

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                        }}
                    >
                        <div className="about-media">
                            <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-github" rel="noreferrer"></a>
                            <a href="https://www.linkedin.com/in/daniel-a-5a9294149/" target="_blank" className="fa fa-linkedin" rel="noreferrer"></a>
                            <a href="#" target="_blank" className="fa fa-twitter"></a>


                            <div className="email-me">
                                <EmailMe
                                    email="borgadee@gmail.com"
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            
        </div >
    )
}

export default About
