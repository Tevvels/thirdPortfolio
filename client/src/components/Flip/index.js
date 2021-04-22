import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";

const Flip = (props) => {

    const [isFlipped,setIsFlipped] = useState(false);
    const handleEvent = () =>{
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className={`projects_container`} onMouseEnter={handleEvent}>
                <p className={`projects_desc`}>{props.desc}</p>
                <h2 className={`projects_title`}>{props.header}</h2>
            </div>
            <div className={`projects_container`} onMouseLeave={handleEvent} >
                <a href={props.href}>                      
                    <img className={`projects_photo`} src={props.src} alt={props.header} />
                    <h2 className={`projects_title`}>{props.header}</h2>
                </a>
            </div>
    </ReactCardFlip>
    )
}

export default Flip
