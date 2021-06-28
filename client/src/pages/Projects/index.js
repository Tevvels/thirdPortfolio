import React,{useState} from 'react'
import Card from '../../components/Card'
import {projects} from "../../data/projectData.js"
import "./style.css"
const Projects = () => {


    return (
        <div  id={`projects`}  className={`projects card`}>
            <h2 className={`projects_header`}>Projects</h2>

            <Card className={`projects card`}>        
          
                    {projects.map((item,index)=>(
                        <>
                         
                            <div className={`projects_container`} key={index}>    
                            <a target={`_blank`} className={`projects_anchor`} href={item.ref}> 
                            <img className={`projects_photo`} src={item.source} alt={item.header} /> 
                       
                                <h2 className={`projects_title`}>{item.header}</h2>
                                    <div className={`projects_box`}>
                                    <p className={`projects_desc`}>{item.desc}</p>                
                               
                                    <ul className={`projects_tech`}>
                                        Tech:
                                        {item.tech.map((item,index)=>(
                                            <li key={index} className={`projects_tech`}>{item}</li>
                                        ))}
                                    </ul>
                                    </div>
                                 </a>

                            </div>

                        </>
                    ))}
            </Card>
        </div>
    )
}

export default Projects
