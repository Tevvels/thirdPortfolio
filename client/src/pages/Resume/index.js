import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import "./style.css"
import resume from '../../data/pdf/Christopher_Watkins_Resume.pdf'
const Resume = (props) => {

    return (
        <>
            <Card  className={`card resume`}>
            <div id={`resume`}
             className={`resume_header`}>
                <h1>Resume</h1>
            </div>
                <Tile positive={'-'} parallax={0.02} className={`tile_resume`}>
                <section className="resume_section" >
                <article className="resume_article" >
                   
                    <iframe title={`resume`} className="resume_display" src={resume}></iframe>
                

                </article>
            </section>
                        
                </Tile>
            </Card>
        </>
    )
}

export default Resume
