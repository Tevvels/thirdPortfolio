import React from 'react'
import Card from '../../components/Card'

import myFace from "../../images/me.jpg"
import "./style.css"

const About = () => {

    return (
        <>
            <Card className={`card about`}>
                <div className={`about_container`}>
                    <div id={`about`} className={`about_header`}>
                        <h1>Christopher Watkins</h1>
                        <h4>Web Developer</h4>
                    </div>
                    <div>


                    <div className={`about_column`}>
                        <div className={`about_contact about_contact-num`}>
                            <p>Phone: 720-498-9054</p>
                            <p>Email: chrisbwatkins@gmail.com</p>
                            <a className={`about_a`} href="https://www.github.com/tevvels" target="_blank">
                                <p>Github: https://www.github.com/tevvels</p>
                            </a>
                            <a className={`about_a`} href="https://www.linkedin.com/in/christopher-watkins-315547153/" target="_blank">
                                <p>Linkedin: https://www.linkedin.com/in/christopher-watkins-315547153/</p>                               
                            </a>
                        </div>
                        <div className={`about_contact about_contact-icon`}>
                            <figure className="icons">
                                <a className={`icons_a`} href="https://www.github.com/tevvels" target="_blank">
                                    <i className="icons_i fas fa-envelope"></i>
                                </a>
                            </figure>
                            <figure className="icons">
                                <a className={`icons_a`} href="https://www.github.com/tevvels" target="_blank">
                                    <i className="icons_i fas fa-phone"></i>
                                </a>
                            </figure>
                            <figure className="icons">
                                <a className={`icons_a`} href="https://www.github.com/tevvels" target="_blank">
                                    <i className="icons_i fab fa-github"></i>
                                </a>
                            </figure>
                            <figure className="icons">
                                <a className={`icons_a`} href="https://www.linkedin.com/in/christopher-watkins-315547153/" target="_blank">
                                    <i className="icons_i fab fa-linkedin"></i>
                                </a>
                            </figure>
                            
                        </div>
                        </div>
                    </div>
                    <img className={`about_photo`} src={myFace} />

                    <p className={`about_text`}>
                    My name is Christopher Watkins. I am a Developer here in Denver, CO. I have spent several years learning how to code. having just recently completed the University of Denver Coding bootcamp I have eager and ready to take on new projects and help the growth of any place I may happen to land 
                    </p>
                </div>
            </Card>
        </>
    )
}

export default About
