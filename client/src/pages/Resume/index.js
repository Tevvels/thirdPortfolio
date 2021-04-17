import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
const Resume = (props) => {

    return (
        <>
            <Card  className={`card resume`}>
               
                <Tile positive={'-'} parallax={0.02} className={`tile_resume`}>

                        
                    hello this is the page I would will with information.
                </Tile>
                this is the card
            </Card>
        </>
    )
}

export default Resume
