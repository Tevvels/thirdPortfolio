import React,{useState} from 'react'
import Card from '../../components/Card'
import {projects} from "../../data/projectData.js"
import "./style.css"
const Projects = () => {


    return (
        <div className={`projects_mobile`}>
            <h2 className={`projects_header`}>Projects</h2>

            <Card className={`projects`}>        
          
                    {projects.map((item,index)=>(
                        <>
                         
                            <div className={`projects_container`} key={index}>    
                            <a target={`_blank`} className={`projects_anchor`} href={item.ref}> 
                            <img className={`projects_photo`} src={item.source} alt={item.header} /> 
                                <h2 className={`projects_title`}>{item.header}</h2>
                                <p className={`projects_desc`}>{item.desc}</p>
                                                    
                               
                                    <ul className={`projects_tech`}>
                                        Tech:
                                        {item.tech.map((item,index)=>(
                                            <li key={index} className={`projects_tech`}>{item}</li>
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
