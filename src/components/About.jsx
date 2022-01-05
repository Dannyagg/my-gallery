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
                alignItems: 'center',
                flexWrap: 'wrap',
                borderRadius: '20px',
                // padding:'200px',
                margin: '100px',
                padding: '300px',
                background: '#3F172C',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',

            }}
        >

            {/* ABOUT SALINA */}

            <div className="about-photo"
                style={{
                    marginBottom: '10px',
                    background: 'transparent',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    marginLeft: '10px',
                    borderRight: '1px solid',

                }}
            >
                <img src={Salina} alt="Girl in a jacket" width="500" height="600"

                    style={{
                        // border: '2px solid red',
                        borderRadius: '10px',
                        margin: '30px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        width: '350px',
                        height: '500px',
                        border: '2px solid ',
                    }}
                />

                <div classNmae="about-message"

                    style={{
                        // border: '2px solid red',
                        width: '400px',
                        color: 'white',
                        margin: '20px',
                        marginBottom: '10px'
                    }}
                >

                    <h1>Salina Seals</h1>

                    <hr />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus sunt iste incidunt? Natus architecto labore dignissimos
                        reprehenderit tenetur aperiam rem dolorum et libero,
                        dolore quas omnis sit, repellat praesentium nihil! </p>
                    <hr />
                    <div classsName="salina-social"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                        }}
                    >
                        <div className="about-media">
                            <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-github"></a>
                            <a href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="fa fa-twitter"></a>
                            <a href="https://www.linkedin.com/in/daniel-a-5a9294149/" target="_blank" className="fa fa-linkedin"></a>
                            <a href="https://www.instagram.com/spacex/" target="_blank" className="fa fa-slack"></a>

                            <div className="email-me">
                                <EmailMe
                                    email="nina@email.com"
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        

            {/* ABOUT DAN */}

            <div className="about-photo"
                style={{
                    marginBottom: '10px',
                    background: 'transparent',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    marginLeft: '20px',
                    borderRight: '1px solid ',
                }}
            >
                <img src={Dan} alt="Girl in a jacket" width="500" height="600"

                    style={{
                        border: '2px solid ',
                        borderRadius: '20px',
                        margin: '30px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        width: '350px',
                        height: '500px',
                    }}
                />

                <div classNmae="about-message"

                    style={{
                        // border: '2px solid red',
                        width: '400px',
                        color: 'white',
                        margin: '20px',
                        marginBottom: '10px'
                    }}
                >

                    <h1>Daniel Agbenu Jr.</h1>

                    <hr />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus sunt iste incidunt? Natus architecto labore dignissimos
                        reprehenderit tenetur aperiam rem dolorum et libero,
                        dolore quas omnis sit, repellat praesentium nihil! </p>

                    <hr />

                    <div classsName="salina-social"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            textShadow: '0.05em 0.05em 0.2em rgba(10,10,10,0.9)',

                        }}
                    >
                        <div className="about-media">
                            <a href="https://github.com/Dannyagg" target="_blank" className="fa fa-github"></a>
                            <a href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="fa fa-twitter"></a>
                            <a href="https://www.linkedin.com/in/daniel-a-5a9294149/" target="_blank" className="fa fa-linkedin"></a>
                            <a href="https://www.instagram.com/spacex/" target="_blank" className="fa fa-slack"></a>

                            <div className="email-me">
                                <EmailMe
                                    email="borgadee@gmail.com"
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default About
