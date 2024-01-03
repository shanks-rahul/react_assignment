import Person from './person.jsx'
import Button from './OnClick.jsx'
import Header from './Header.jsx';
import List from './list.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Tom" age="15"/>
      <Button text="plz click me" onClick={()=>console.log("clicked button")} />
      <Header title="welcome to pwskills"/>
      <List items={['gaurav','tarun','altaf','mylove']}/>
    </div>
  );
}

export default App;
