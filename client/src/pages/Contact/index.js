import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
const Contact = (props) => {
    return (
        <>
            <Card className={`card contact`}>
                <Tile 
                className={`tile-contact`} 
                parallax={0.15}
                positive={'-'}>
                    contact page
                </Tile>
            </Card>
        </>
    )
}

export default Contact
