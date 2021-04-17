import React from 'react'
import "./style.css"

const Card = ({children},props) => {
    return (
        <div className={`card`} style={props.style}>


           {children}
        </div>
    )
}

export default Card
