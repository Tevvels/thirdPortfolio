import React from "react";


import Footer from './components/Footer'
import Nav from './components/Nav'
import Projects from './pages/Projects'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Icon from './components/Icon'
import Icon2 from './components/Icon2'
import Icon3 from './components/Icon3'
import Puzzle from './components/Puzzle'
import PuzzleA from './components/Puzzle/puzzle-a'
import PuzzleB from './components/Puzzle/puzzle-b'
import PuzzleC from './components/Puzzle/puzzle-c'
import PuzzleD from './components/Puzzle/puzzle-d'
import PuzzleE from './components/Puzzle/puzzle-e'
import PuzzleAPieceOne from './components/Puzzle/puzzle-a/puzzle-a-piece-one';
import PuzzleAPieceTwo from './components/Puzzle/puzzle-a/puzzle-a-piece-two';
import PuzzleBPieceOne from './components/Puzzle/puzzle-b/puzzle-b-piece-one';
import PuzzleBPieceTwo from './components/Puzzle/puzzle-b/puzzle-b-piece-two';
import PuzzleBPieceThree from './components/Puzzle/puzzle-b/puzzle-b-piece-three';
import PuzzleBPieceFour from './components/Puzzle/puzzle-b/puzzle-b-piece-four';
import PuzzleCPieceOne from './components/Puzzle/puzzle-c/puzzle-c-piece-one';
import PuzzleCPieceTwo from './components/Puzzle/puzzle-c/puzzle-c-piece-two';
import PuzzleCPieceThree from './components/Puzzle/puzzle-c/puzzle-c-piece-three';
import PuzzleDPieceOne from './components/Puzzle/puzzle-d/puzzle-d-piece-one';
import PuzzleDPieceTwo from './components/Puzzle/puzzle-d/puzzle-d-piece-two';
import PuzzleDPieceThree from './components/Puzzle/puzzle-d/puzzle-d-piece-three';
import PuzzleDPieceFour from './components/Puzzle/puzzle-d/puzzle-d-piece-four';
import PuzzleEPieceOne from './components/Puzzle/puzzle-e/puzzle-e-piece-one';


function App() {

  return (
    <div className="App">

      {/* <Nav/> */}
      <h1>hello</h1>
      <PuzzleE />
      <PuzzleEPieceOne />

      <About />
      <Puzzle />
      <PuzzleA />
      <PuzzleAPieceOne />
      <PuzzleAPieceTwo />
      <PuzzleBPieceOne />
      <PuzzleBPieceTwo />
      <PuzzleBPieceThree />
      <PuzzleBPieceFour />
      <PuzzleB />
  
      {/* <Projects /> */}
      <PuzzleC />
      <PuzzleCPieceOne />
      <PuzzleCPieceTwo />
      <PuzzleCPieceThree />

      <PuzzleDPieceOne />
      <PuzzleDPieceTwo />
      <PuzzleDPieceThree />
      <PuzzleDPieceFour />

      <PuzzleD />
   

      {/* <Resume /> */}
      <Icon2 />
      {/* <Contact /> */}
      <Footer />        
    </div>
  );
}

export default App;
 