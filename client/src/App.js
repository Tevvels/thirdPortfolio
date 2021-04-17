import React, {useState,useEffect} from "react";


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
      <About className={`card about`} style={{transform: `translateY(${offsetY * 0.15}px)`}} />
      <Projects style={{transform: `translateY(${offsetY * 0.15}px)`}} />
      <Resume style={{transform: `translateY(${offsetY * 0.15}px)`}} />
      <Contact style={{transform: `translateY(${offsetY * 0.15}px)`}} />
      <Footer />        
    </div>
  );
}

export default App;
 