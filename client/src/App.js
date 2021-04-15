import './App.css';
import Container from './components/Container.js'
import Card from './components/Card.js'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
        <h1 className={`App-logo`}>oh hello</h1>
       <Nav className={`App-logo`}/>
       <Card/> 
       <Container name={` chris`} /> 
        
    </div>
  );
}

export default App;
