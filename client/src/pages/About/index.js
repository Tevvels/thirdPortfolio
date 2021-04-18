import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
const About = () => {

    return (
        <>
            <Card className={`card about`}>
                <Tile positive={''} parallax={.26}  className={`tile_about-photo`}>
                   
                    the img
                </Tile>
                <Tile positive={'-'} parallax={0.16} className={`tile_about-content`}>
                    the content
                </Tile>
            </Card>
        </>
    )
}

export default About
