import React, {useState,useEffect} from "react";
// import './App.css';
import Container from './components/Container.js'
import Card from './components/Card.js'
import Nav from './components/Nav'
function App() {
  const [offsetY, setOffsetY] =useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    return () => window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="App">
        <h1 className={`App-logo`}style={{transform: `translateY(${offsetY * 0.5}px)`}}>oh hello</h1>
        <h1 className={`App-logo`}style={{transform: `translateY(${offsetY * 0.7}px)`}}>oh hello</h1>
        <h1 className={`App-logo`}style={{transform: `translateY(${offsetY * 0.9}px)`}}>oh hello</h1>
       <Nav className={`App-logo`}style={{transform: `translateY(${offsetY * 0.9}px)`}}/>
       <Card/> 
       <Container name={` chris`} /> 
        
    </div>
  );
}

export default App;
