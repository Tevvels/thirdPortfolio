import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
const Contact = (props) => {
    return (
        <>
            <Card className={`card contact`}>
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
