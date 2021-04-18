import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
const Projects = (props) => {

    return (
        <>
            <Card className={`card projects`}>
              
            
      <Tile positive={'-'} parallax={0.12} project={`Apples`} className={`apples`}/>
      <Tile positive={'-'} parallax={0.42} project={`oranges`} className={`oranges`} />
      <Tile positive={'-'} parallax={0.12} project={`grapes`} className={`grapes`} />
      <Tile positive={'-'} parallax={0.42} project={`bananas`} className={`bananas`}/>
      <Tile positive={'-'} parallax={0.12} project={`limes`} className={`limes`} />
      <Tile positive={'-'} parallax={0.42} project={`lemons`} className={`lemons`} >hello</Tile>
    
            </Card>
        </>
    )
}

export default Projects
