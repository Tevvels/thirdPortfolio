import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
const Projects = (props) => {

    return (
        <>
            <Card className={`card projects`}>
              
            
      <Tile positive={'-'} parallax={0.15} project={`Apples`} className={`apples`}/>
      <Tile positive={'-'} parallax={0.52} project={`oranges`} className={`oranges`} />
      <Tile positive={'-'} parallax={0.15} project={`grapes`} className={`grapes`} />
      <Tile positive={'-'} parallax={0.52} project={`bananas`} className={`bananas`}/>
      <Tile positive={'-'} parallax={0.15} project={`limes`} className={`limes`} />
      <Tile positive={'-'} parallax={0.52} project={`lemons`} className={`lemons`} >hello</Tile>
    
            </Card>
        </>
    )
}

export default Projects
