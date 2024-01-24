import './App.css';
import Button from './components/Button';
import Person from './components/Person';

function App() {
  return (
    <div className="App" style={{border:"solid"}}>

        <Button name="hans" age="18"/>
        <Button name = "sepp" age ="21"/>
        <Button name= "paul" age = "14"/>
        hallo
        <Person name="Finn" description="Supder Coder"/>
        <Person name="Hannes" description="Supder Programmierer"/>
        <Person name="Sude" description="Supder Coder"/>

    </div>
  );
}


export default App;
