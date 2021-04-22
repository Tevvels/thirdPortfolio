import React,{useState} from 'react'
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import brawndo from '../../images/brawndo.png'
import hoh from '../../images/home-ss.PNG'
import daburger from '../../images/DaBurger.png'
import codequiz from '../../images/code_quiz.jpg'
import dayplanner from '../../images/day_planner_01.PNG'
import one from '../../images/one.png'
import ReactCardFlip from 'react-card-flip';
import Flip from '../../components/Flip'
import "./style.css"
const Projects = () => {


    return (
        <>
            <Card className={`card card_projects`}>        
                <div id={`projects`} className={`projects_header`}>
                    <h2>Projects</h2>
                </div>
                <Tile positive={'-'} parallax={0.12} className={`apples `} >
                    <Flip 
                    header={`Brawndo`}
                    src={brawndo}
                    href={`https://brawndoplant.herokuapp.com/garden`}
                    desc={`App to monitor plants water to help them grow!`} />

                </Tile>
                <Tile positive={'-'} parallax={0.42} className={`oranges`}>
                <Flip 
                    header={`Code Quiz`}
                    src={codequiz}
                    href={`https://tevvels.github.io/DU_bootcamp_homework_4_code_quiz/`}
                    desc={`A quiz to test your javascript skills`} />

                </Tile>
                <Tile positive={'-'} parallax={0.12} className={`grapes`}>
                <Flip 
                    header={`Deep Vibrations`}
                    src={one}
                    href={`https://tevvels.github.io/Project_One_Deep_Vibrations/index.html`}
                    desc={`App that helps your find your music baased on moods`} />
                </Tile>
                <Tile positive={'-'} parallax={0.42} className={`bananas`}>
                <Flip 
                    header={`Da Burger`}
                    src={daburger}
                    href={`https://arcane-headland-91349.herokuapp.com/`}
                    desc={`List the Burgers made and Consumed to find which one is popular`} />
                </Tile>
                <Tile positive={'-'} parallax={0.12} className={`limes`}>
                <Flip 
                    header={`Daily Planner`}
                    src={dayplanner}
                    href={`https://tevvels.github.io/DU_bootcamp_homework_5_Day_Planner/`}
                    desc={`A Jquery based daily planner`} />         
                </Tile>
                <Tile positive={'-'} parallax={0.42} className={`lemons`}>
                <Flip 
                    header={`Hall of Heroes`}
                    src={hoh}
                    href={`https://hall-of-heroes.herokuapp.com/`}
                    desc={`App that stores Dungeon and Dragons character Sheets`} />
                </Tile>
            </Card>
        </>
    )
}

export default Projects
