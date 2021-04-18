import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import "./style.css"
const Contact = (props) => {
    return (
        <>
            <Card className={`card contact`}>
            <div id={`contact`}
            className={`contact_header`}>
                <h1>Hello and Welcome!</h1>
            </div>
                <Tile 
                className={`tile_contact`} 
                parallax={0.05}
                positive={' '}>



                    
                    <Tile 
                    className={`tile_contact-name`} 
                    parallax={0.05}
                    positive={''}>
                        <input className={`input`} type={`text`} placeholder={`name please`}></input>
                   </Tile>
                    <Tile 
                    className={`tile_contact-email`} 
                    parallax={0.07}
                    positive={''}>
                        <input className={`input`} type={`email`} placeholder={`email please`}></input>
                   </Tile>
                    <Tile 
                    className={`tile_contact-textarea`} 
                    parallax={0.01}
                    positive={'-'}>
                        <textarea className={`input`} placeholder={"something would like to say"}></textarea>
                   </Tile>
                    <Tile 
                    className={`tile_contact-submit`} 
                    parallax={0.01}
                    positive={'-'}>
                        <input type={`submit`} className={` input input-submit`} placeholder={"something would like to say"}/>
                   </Tile>
                </Tile>
            </Card>
        </>
    )
}

export default Contact
