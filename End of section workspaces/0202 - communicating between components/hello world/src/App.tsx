import React from 'react';

import './App.css';
import Greeting from "./components/Greeting/Greeting";
import ClassGreetingExample from "./components/Greeting/GreetingClassExample";
import SongList from "./components/Songs/SongList";

function App() {
  return (
    <div>
        <Greeting name="Matt" age="21"/>
        <Greeting name="Sally" age="32"/>
        <ClassGreetingExample name="Denise" age="33" />
        <SongList />
    </div>
  );
}

export default App;
