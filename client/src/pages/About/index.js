import React from 'react'
import Card from '../../components/Card'

import myFace from "../../images/me.jpg"
import "./style.css"
import {aboutDetail,aboutSkills} from "../../data/aboutData.json"
const About = () => {




    return (
        <div className={`card about`}>
            <Card className={`card about`}>
                <div className={`about_container`}>
                    <div id={`about`} className={`about_header`}>
                        <h1>{aboutDetail.name}</h1>
                        <h4>Web Developer</h4>
                    </div>
                    
                    <div className={`about_column`}>
   
                        <img className={`about_photo`} alt={aboutDetail.name} src={myFace} />

                        <div className={`about_container_inner`}>
                            <div className={`about_text`}>
                            <p >
                                Full Stack Web Developer, using a background in finance and customer service to provide a friendly and
                                welcoming environment while ensuring accuracy and professionalism with any project including websites and
                                software. Recently earned a certificate in Full Stack Web Development from the University of Denver Coding
                                Boot Camp. Passionate designer, creative and innovative problem solver. 
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

                                
                        <a href={`#contact`}
                    className={`about_button`}>Contact Me</a>
                            </div>

                        </div>

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default About





