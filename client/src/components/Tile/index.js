import React from 'react';
import "./style.css";

const Tile = (props) => {
    return (
        <div className={` tile ${props.className}`} style={props.style}>
            {props.project}
        </div>
    )
}

export default Tile
