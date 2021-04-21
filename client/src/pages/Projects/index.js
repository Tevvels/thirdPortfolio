import React from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import brawndo from '../../images/brawndo.png'
import hoh from '../../images/home-ss.PNG'
import daburger from '../../images/DaBurger.png'
import codequiz from '../../images/code_quiz.jpg'
import dayplanner from '../../images/day_planner_01.PNG'
import one from '../../images/one.png'
import "./style.css"
const Projects = () => {
    return (
        <>
            <Card className={`card`}>        
                <div id={`projects`} className={`projects_header`}>
                    <h2>Projects</h2>
                </div>
                <Tile positive={'-'} parallax={0.12} className={`apples projects_container`} >
                    <p className={`projects_desc`}>to help plants grow</p>
                    <a className={`projects`} href={`https://brawndoplant.herokuapp.com/garden`}>
                        <img className={` brawndo projects_photo`} src={brawndo} alt={`brawndo`} />
                        <h2 className={`projects_title`}>Brawndo</h2>             
                    </a>
                </Tile>
                <Tile positive={'-'} parallax={0.42} className={`oranges projects_container`}>
                    <p className={`projects_desc`}>A quiz to test your javascript skills</p>
                    <a className={`projects`} href={`https://tevvels.github.io/DU_bootcamp_homework_4_code_quiz/`}>
                        <img className={`brawndo projects_photo`} src={codequiz} alt={`codequiz`} />
                        <h2 className={`projects_title`}>Code Quiz</h2>               
                    </a>
                   
                </Tile>
               
                <Tile positive={'-'} parallax={0.12} className={`grapes projects_container`}> 
                    <p className={`projects_desc`}>Find music for your mood</p>
                    <a className={`projects`} href={`https://tevvels.github.io/Project_One_Deep_Vibrations/index.html`}>
                        <img className={`brawndo projects_photo`} src={one} alt={`one`} />
                        <h2 className={`projects_title`}>Deep Vibrations</h2>
                    </a>
                </Tile>
               
                <Tile positive={'-'} parallax={0.42} className={`bananas projects_container`}>
                    <p className={`projects_desc`}>A log of Burgers made and consumed</p>
                    <a className={`projects`} href={`https://arcane-headland-91349.herokuapp.com/`}>
                        <img className={`brawndo projects_photo`} src={daburger} alt={`daburger`} />
                        <h2 className={`projects_title`}>Da Burger</h2>
                    </a>
                </Tile>
               
                <Tile positive={'-'} parallax={0.12} className={`limes projects_container`}>
                    <p className={`projects_desc`}>A Javascript daily planner</p>
                    <a className={`projects`} href={`https://tevvels.github.io/DU_bootcamp_homework_5_Day_Planner/`}>
                        <img className={`brawndo projects_photo`} src={dayplanner} alt={`dayplanner`} />
                        <h2 className={`projects_title`}>Daily Planner</h2>
                    </a>
                </Tile>
                
                <Tile positive={'-'} parallax={0.42} className={`lemons projects_container`}>
                <p className={`projects_desc`}>A Dungeon and Dragons character sheet holder</p>
                    <a className={`projects`} href={`https://hall-of-heroes.herokuapp.com/`}>
                        <img className={`brawndo projects_photo`} src={hoh} alt={`Hall of Heroes`} />
                        <h2 className={`projects_title`}>Hall of Heroes</h2>
                    </a>
                </Tile>
                

            </Card>
        </>
    )
}

export default Projects
