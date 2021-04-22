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
                <Tile positive={'-'} parallax={0.82} className={`projects_mobile projects_brawndo `} >
                    <Flip 
                    header={`Brawndo`}
                    src={brawndo}
                    href={`https://brawndoplant.herokuapp.com/garden`}
                    desc={`App to monitor plants water to help them grow!`} />

                </Tile>
                <Tile positive={'-'} parallax={0.76} className={`projects_mobile projects_hoh`}>
                <Flip 
                    header={`Hall of Heroes`}
                    src={hoh}
                    href={`https://hall-of-heroes.herokuapp.com/`}
                    desc={`App that stores Dungeon and Dragons character Sheets`} />
                </Tile>
            
                <Tile positive={'-'} parallax={0.33} className={`projects_mobile projects_deepvibes`}>
                <Flip 
                    header={`Deep Vibrations`}
                    src={one}
                    href={`https://tevvels.github.io/Project_One_Deep_Vibrations/index.html`}
                    desc={`App that helps your find your music baased on moods`} />
                </Tile>
                <Tile positive={'-'} parallax={0.30} className={`projects_mobile projects_daburger`}>
                <Flip 
                    header={`Da Burger`}
                    src={daburger}
                    href={`https://arcane-headland-91349.herokuapp.com/`}
                    desc={`List the Burgers made and Consumed to find which one is popular`} />
                </Tile>
                <Tile positive={'-'} parallax={0.04} className={`projects_mobile projects_dailyplanner`}>
                <Flip 
                    header={`Daily Planner`}
                    src={dayplanner}
                    href={`https://tevvels.github.io/DU_bootcamp_homework_5_Day_Planner/`}
                    desc={`A Jquery based daily planner`} />         
                </Tile>
                <Tile positive={'-'} parallax={0.01} className={`projects_mobile projects_codequiz`}>
                <Flip 
                    header={`Code Quiz`}
                    src={codequiz}
                    href={`https://tevvels.github.io/DU_bootcamp_homework_4_code_quiz/`}
                    desc={`A quiz to test your javascript skills`} />

                </Tile>
            </Card>
        </>
    )
}

export default Projects
