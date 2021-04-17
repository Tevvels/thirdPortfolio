import React, {useState,useEffect} from "react";

import Card from './components/Card'
import Tile from './components/Tile'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Projects from './pages/Projects'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
function App() {
  const [offsetY, setOffsetY] =useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    return () => window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="App">
      <h1 style={{transform: `translateY(${offsetY * 0.7}px)`}}>Christopher Watkins</h1>
      <h2 style={{transform: `translateY(${offsetY * 0.9}px)`}}>Full Stack Developer</h2>
      <Nav style={{transform: `translateY(${offsetY * .99}px)`}}/>
      <About style={{transform: `translateY(${offsetY * 0.15}px)`}}>
          <p>section about me</p>
      </About> 
      <Projects style={{transform: `translateY(${offsetY * 0.15}px)`}}>
        <p>Hello from projects</p>
      </Projects>
      <Resume style={{transform: `translateY(${offsetY * 0.15}px)`}}>
        <p>Hello from Resume</p>
      </Resume>
      <Contact style={{transform: `translateY(${offsetY * 0.15}px)`}}>
        <p>Hello from Contact</p>
      </Contact>
       <Footer />
        
    </div>
  );
}

export default App;
