import React from 'react'

const Card = (props) => {
    return (
        <div style={props.style}>
           {props.data}
        </div>
    )
}

export default Card
