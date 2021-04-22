import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import myFace from "../../images/me.jpg"
import "./style.css"

const About = () => {

    return (
        <>
            <Card className={`card about`}>
                <div id={`about`} className={`about_header`}>
                    <h1>Hello and Welcome!</h1>
                </div>
                <Tile positive={''} parallax={.26}  className={`tile_about-photo`}>
                    <img className={`about_photo`} src={myFace}/>
                </Tile>
                <Tile positive={'-'} parallax={0.16} className={`tile_about-content`}>
                    <div className={`about_column`}>
                        <h1> Christopher Watkins, Web Dev </h1>
                        <div className={`about_contact about_contact-num`}>
                            <p>Phone: 720-498-9054</p>
                            <p>Email: chrisbwatkins@gmail.com</p>
                        </div>
                        <div className={`about_contact about_contact-icon`}>
                            <figure class="icons">
                                <a href="https://www.github.com/tevvels" target="_blank">
                                    <i class="fab fa-github"></i>
                                    <p class="iconName">Github</p>
                                </a>
                            </figure>
                            <figure class="icons">
                                <a href="https://www.linkedin.com/in/christopher-watkins-315547153/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                    <p class="iconName">Linkedin</p>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <p className={`about_text`}>
                    My name is Christopher Watkins. I am a Developer here in Denver, CO. I have spent several years learning how to code. having just recently completed the University of Denver Coding bootcamp I have eager and ready to take on new projects and help the growth of any place I may happen to land 
                    </p>
                </Tile>
            </Card>
        </>
    )
}

export default About
