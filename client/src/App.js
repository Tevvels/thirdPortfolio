import React from "react";


import Footer from './components/Footer'
import Nav from './components/Nav'
import Projects from './pages/Projects'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="App">

      <Nav/>
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />        
    </div>
  );
}

export default App;
 