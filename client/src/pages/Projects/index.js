import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import brawndo from '../../images/brawndo.png'
import mains from '../../images/main.png'
import daburger from '../../images/DaBurger.png'
import codequiz from '../../images/code_quiz.jpg'
import dayplanner from '../../images/day_planner_01.PNG'
import one from '../../images/one.png'
import "./style.css"
const Projects = (props) => {

    return (
        <>
            <Card 
            className={`card`}>
              
            <div className={`projects_header`}>
                <h1>Hello and Welcome!</h1>
            </div>
      <Tile 
      positive={'-'} 
      parallax={0.12}
      className={`apples projects`}
      >
        
        
        <a href={`https://brawndoplant.herokuapp.com/garden`}>
            <img className={`brawndo projects_photo`} src={brawndo} alt={`brawndo`} />
        </a>
        <h1>Apples</h1>
      </Tile>
      
      <Tile 
      positive={'-'} 
      parallax={0.42} 
      className={`oranges projects`} 
      >
        <a href={`https://brawndoplant.herokuapp.com/garden`}>
            <img className={`brawndo projects_photo`} src={codequiz} alt={`codequiz`} />
        </a>
        <h1>Apples</h1>

      </Tile>
      <Tile 
      positive={'-'} 
      parallax={0.12} 
      className={`grapes projects`} 
      > 
             <a href={`https://brawndoplant.herokuapp.com/garden`}>
                 <img className={`brawndo projects_photo`} src={one} alt={`one`} />
            </a>
  <h1>Apples</h1>
  </Tile>
      <Tile 
      positive={'-'} 
      parallax={0.42} 
      className={`bananas projects`}
      >
                  <a href={`https://brawndoplant.herokuapp.com/garden`}>
            <img className={`brawndo projects_photo`} src={daburger} alt={`daburger`} />
        </a>
        <h1>Apples</h1>
      </Tile>

      <Tile 
      positive={'-'} 
      parallax={0.12} 
      className={`limes projects`} 
      >
        <a href={`https://brawndoplant.herokuapp.com/garden`}>
            <img className={`brawndo projects_photo`} src={dayplanner} alt={`dayplanner`} />
        </a>
        <h1>Apples</h1>

      </Tile>
      <Tile 
      positive={'-'} 
      parallax={0.42} 
      className={`lemons projects`} >        <a href={`https://brawndoplant.herokuapp.com/garden`}>
      <img className={`brawndo projects_photo`} src={brawndo} alt={`brawndo`} />
  </a>
  <h1>Apples</h1></Tile>
    
            </Card>
        </>
    )
}

export default Projects
