import React from 'react'
import Resumepdf from "../../files/Resume.pdf";
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import "./style.css"
const Resume = (props) => {

    return (
        <>
            <Card  className={`card resume`}>
               
                <Tile positive={'-'} parallax={0.02} className={`tile_resume`}>
                <section className="resume_section" >
                <article className="resume_article" >
                <a href={Resumepdf} className={`resume_download`} download="chris_watkins_resume">download now!</a>
                   
                    <iframe className="resume_display" src="https://docs.google.com/document/d/1WA5cnnF47GHMRMj3KMGQZHwH_n5AnFCBCFDbJgUTBlk/edit?usp=sharing"></iframe>
                
                </article>
            </section>
                        
                </Tile>
            </Card>
        </>
    )
}

export default Resume
