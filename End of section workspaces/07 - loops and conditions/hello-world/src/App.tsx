import './App.css';
import Greeting from './components/Greeting/Greeting'
import SongList from "./components/Songs/SongList";

function App() {
  return (
    <div>
        <Greeting name="Matt" age={21}/>
        <Greeting name="Sally" age={32}/>
        <SongList />
    </div>
  );
}

export default App;
