import React,{useState} from 'react'
import Card from '../../components/Card'
import {projects} from "../../data/projectData.js"
import "./style.css"
const Projects = () => {


    return (
        <div>
            <Card className={`projects`}>        
                <div id={`projects`} className={`projects_header`}>
                    <h2>Projects</h2>
                </div>
                    {projects.map((item,index)=>(
                        <>
                            <div className={`projects_container`} key={index}>
                                <h2 className={`projects_title`}>{item.header}</h2>
                                <p className={`projects_desc`}>{item.desc}</p>
                                <a target={`_blank`} href={item.ref}>                      
                                <img className={`projects_photo`} src={item.source} alt={item.header} /> 
                                    <ul className={`projects_tech`}>
                                        Tech:
                                        {item.tech.map((item,index)=>(
                                            <li className={`projects_tech`}>{item}</li>
                                        ))}
                                    </ul>
                                </a>
                            </div>
                        </>
                    ))}
            </Card>
        </div>
    )
}

export default Projects
