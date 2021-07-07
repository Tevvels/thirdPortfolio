import React from "react";
import Nav from './components/Nav'
import Projects from './pages/Projects'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Puzzle from './components/Puzzle'
import PuzzleA from './components/Puzzle/puzzle-a'
import PuzzleB from './components/Puzzle/puzzle-b'
import PuzzleC from './components/Puzzle/puzzle-c'
import PuzzleD from './components/Puzzle/puzzle-d'
import PuzzleE from './components/Puzzle/puzzle-e'
import PuzzleF from './components/Puzzle/puzzle-f'
import PuzzleG from './components/Puzzle/puzzle-g'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <Nav/>
      <PuzzleE />
      <About />
      <Puzzle />
      <PuzzleA />
      <PuzzleB />
      <Projects />
      <PuzzleC />
      <PuzzleD />
      <Resume />
      <PuzzleG/>
      <Contact />
      <PuzzleF />
      <Footer />        
    </div>
  );
}

export default App;
 