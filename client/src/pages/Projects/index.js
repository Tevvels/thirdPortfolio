import React, {useState,useEffect} from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
const Projects = ({children},props) => {
const [offsetY, setOffsetY] =useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    return () => window.removeEventListener("scroll",handleScroll)
  },[])
    return (
        <div>
            <Card style={props.style}>
                {children}
            
      <Tile style={{transform: `translateY(-${offsetY * 0.30}px)`}} project={`Apples`} className={`apples`}/>
      <Tile style={{transform: `translateY(-${offsetY * 0.52}px)`}} project={`oranges`} className={`oranges`} />
      <Tile style={{transform: `translateY(-${offsetY * 0.30}px)`}} project={`grapes`} className={`grapes`} />
      <Tile style={{transform: `translateY(-${offsetY * 0.52}px)`}} project={`bananas`} className={`bananas`}/>
      <Tile style={{transform: `translateY(-${offsetY * 0.30}px)`}} project={`limes`} className={`limes`} />
      <Tile style={{transform: `translateY(-${offsetY * 0.52}px)`}} project={`lemons`} className={`lemons`} />
    
            </Card>
        </div>
    )
}

export default Projects
