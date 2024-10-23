import "./App.css";
import { useState } from "react";

function App() {

  const [greetingMsg, setGreetingMsg] = useState('Greeting Message');
  const [newGreetingMsg, setNewGreetingMsg] = useState('');

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={(e)=>{setNewGreetingMsg(e.target.value)}}/>
      </div>

      <div className="buttons">
        <button onClick={()=>{setGreetingMsg(newGreetingMsg)}}>Update text</button>
      </div>
    </div>
  );
}

export default App;
