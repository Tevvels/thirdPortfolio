import React, {useState,useEffect} from "react";
import "./style.css"

const Card = (props) => {
    const [offsetY, setOffsetY] =useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
  
      return () => window.removeEventListener("scroll",handleScroll)
    },[])
    return (
        <div className={props.className} style={{transform: `translateY(${offsetY * 0.15}px)`}}>


           {props.children}
        </div>
    )
}

export default Card
