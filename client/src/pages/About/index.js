import React from 'react'
import Card from '../../components/Card'

import myFace from "../../images/me.jpg"
import "./style.css"
import {aboutDetail,aboutSkills} from "../../data/aboutData.json"
const About = () => {




    return (
        <>
            <Card className={`card about`}>
                <div className={`about_container`}>
                    <div id={`about`} className={`about_header`}>
                        <h1>{aboutDetail.name}</h1>
                        <h4>Web Developer</h4>
                    </div>
                    
                    <div className={`about_column`}>
   
                        <img className={`about_photo`} alt={aboutDetail.name} src={myFace} />

                        <div className={`about_container_inner`}>
                            <div>
                            <p className={`about_text`}>
                                    My name is Christopher Watkins. I am a Developer here in Denver, CO. I have spent several years learning how to code. having just recently completed the University of Denver Coding bootcamp I have eager and ready to take on new projects and help the growth of any place I may happen to land 
                                </p>
                                <i className={`about_i`}></i>

                            </div>
                                <div className={`about_contact about_contact-num`}>
                                    <article className={ ` about_contact-section about_contact-section-a`}>
                                        <p>Phone: {aboutDetail.phone}</p>
                                        <p>Email: {aboutDetail.email}</p>
                                    </article>
                                    <article className={ `about_contact-section about_contact-section-b`}>    
                                        <a className={`about_a`} rel={`noreferrer`} href={aboutDetail.github} target="_blank">
                                            <p>Github:{aboutDetail.github}</p>
                                        </a>
                                        <a className={`about_a`} rel={`noreferrer`}  href={aboutDetail.linkedin} target="_blank">
                                            <p>Linkedin:{aboutDetail.linkedin}</p>                               
                                        </a>
                                    </article>
                                </div>
                            <div>
                            <i className={`about_i`}></i>

                                <div className={`about_skills`}>
                                    <div className={`about_skills-languages`}>
                                        Languages:
                                    {aboutSkills.languages.map((item,index)=>(
                                        <div key={index} className={`about_skills-item about_skills-item-${item.name}`}>{item.name}</div>
                                    ))}
                                    </div>
                                    <div className={`about_skills-Tools`}>
                                        Tools: 
                                    {aboutSkills.Tools.map((item,index)=>(
                                        <div key={index} className={`about_skills-item about_skills-item-${item.name}`}>{item.name}</div>
                                    ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default About





