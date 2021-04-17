import React,{useState,useEffect} from 'react';
import "./style.css";

const Tile = (props) => {
    const [offsetY, setOffsetY] =useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
  
      return () => window.removeEventListener("scroll",handleScroll)
    },[])
    return (
        <div className={` tile ${props.className}`} style={{transform: `translateY(${props.positive}${offsetY * props.parallax}px)`}}>
        {props.children}
        </div>
    )
}

export default Tile
