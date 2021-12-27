import React from 'react';
import Salina from '../images/Salina.jpg';
import Dan from '../images/Dan.jpg';


const About = () => {
    return (
        <div className="about-wrapper"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
                // border: '2px solid red',
                margin: 'auto',
                padding:'20px',
                marginBottom: '10px',
                
            }}
        >
            <div className="about-photo"
                style={{
                    marginBottom: '10px',
                    backgroundColor: 'black',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    marginLeft: '10px',
                    
                }}
            >
                <img src={Salina} alt="Girl in a jacket" width="500" height="600"

                    style={{
                        // border: '2px solid red',
                        borderRadius: '20px',
                        margin: '30px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        width: '200px',
                        height: '300px',
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

                        }}
                    >

                        <hr />

                        <a href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="fa fa-twitter"></a>
                        <a href="https://www.linkedin.com/company/spacex/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://www.instagram.com/spacex/" target="_blank" className="fa fa-instagram"></a>
                        

                        <h5>Contact: nina@gmail.com</h5>
                    </div>
                </div>
            </div>

            <div className="about-photo"
                style={{
                    marginBottom: '10px',
                    backgroundColor: 'black',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    marginLeft: '10px',

                }}
            >
                <img src={Salina} alt="Girl in a jacket" width="500" height="600"

                    style={{
                        // border: '2px solid red',
                        borderRadius: '20px',
                        margin: '30px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        width: '200px',
                        height: '300px',
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

                        }}
                    >

                        <hr />

                        <a href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="fa fa-twitter"></a>
                        <a href="https://www.linkedin.com/company/spacex/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://www.instagram.com/spacex/" target="_blank" className="fa fa-instagram"></a>


                        <h5>Contact: nina@gmail.com</h5>
                    </div>
                </div>
            </div>


            <div className="about-photo"
                style={{
                    marginBottom: '10px',
                    backgroundColor: 'black',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    marginLeft: '10px'
                }}
            >
                <img src={Dan} alt="Girl in a jacket" width="500" height="600"

                    style={{
                        // border: '2px solid red',
                        borderRadius: '20px',
                        margin: '30px',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        width: '200px',
                        height: '300px',
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

                    <h1>El Guapo</h1>

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

                        }}
                    >

                        <a href="https://www.linkedin.com/company/spacex/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://www.instagram.com/spacex/" target="_blank" className="fa fa-github"></a>
                        <a href="https://www.instagram.com/spacex/" target="_blank" className="fa fa-slack"></a>

                        <h5>Contact: elguapo@gmail.com</h5>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About
