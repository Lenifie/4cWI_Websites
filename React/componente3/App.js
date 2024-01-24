import './App.css';
import Button from '../../componente3/Button';
import List from './components/List';
import Card from './components/Card';


function App() {
  return (
    <div className="App" >

      <h1>Aufgabe Komponenten:</h1>
      <p>Liste:</p>
      <List description="Coffe"/>
      <List description="Tea"/>
      <List description="Beer"/>

      Button:
      <Button/>

      Card:
      <Card/>
    </div>
  );
}


export default App;
