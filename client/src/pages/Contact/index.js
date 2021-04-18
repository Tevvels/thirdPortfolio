import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import "./style.css"
const Contact = (props) => {
    return (
        <>
            <Card className={`card contact`}>
            <div className={`contact_header`}>
                <h1>Hello and Welcome!</h1>
            </div>
                <Tile 
                className={`tile_contact`} 
                parallax={0.05}
                positive={' '}>
                    contact page
                </Tile>
            </Card>
        </>
    )
}

export default Contact
