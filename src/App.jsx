import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMsg, setGreetingMsg] = useState("Greeting Message");
  const [inputText, setInputText] = useState("");

  
  const handleGreetingChange = (event) => {
    setInputText(event.target.value);
  };

  
  const handleGreetingUpdate = () => {
    setGreetingMsg(inputText);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputText}
          onChange={handleGreetingChange} 
        />
      </div>

      <div className="buttons">
        <button onClick={handleGreetingUpdate}>Update text</button> 
      </div>
    </div>
  );
}

export default App;

