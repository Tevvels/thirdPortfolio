import React, {useState,useEffect} from "react";

import Container from './components/Container.js'
import Card from './components/Card'
import Tile from './components/Tile'
import Footer from './components/Footer'
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
        <h1 style={{transform: `translateY(${offsetY * 0.7}px)`}}>oh hello</h1>
        <h1 style={{transform: `translateY(${offsetY * 0.9}px)`}}>oh hello</h1>
       <Nav style={{transform: `translateY(${offsetY * .99}px)`}}/>
       <Tile style={{transform: `translateY(${offsetY * 0.79}px)`}} project={`grapes`} />
       <Card data={`Christopher Watkins`} style={{transform: `translateY(${offsetY * 0.15}px)`}}/> 
       <Card data={`Projects`} style={{transform: `translateY(${offsetY * 0.15}px)`}}/> 
       <Tile style={{transform: `translateY(-${offsetY * 0.52}px)`}} project={`Apples`} />
       <Tile style={{transform: `translateY(${offsetY * 0.55}px)`}} project={`oranges`} />
       

       <Card data={`Resume`} style={{transform: `translateY(${offsetY * .15}px)`}}/> 
       <Card data={`Contact Me!`} style={{transform: `translateY(${offsetY * .15}px) margin-bottom:250px`}}/> 
       <Footer />
        
    </div>
  );
}

export default App;
