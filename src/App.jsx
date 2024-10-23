import "./App.css";
import { useState } from "react";

function App() {
  const [showMsg, setShowMsg] = useState("Greeting Message");
  const [inputMsg, setInputMsg] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{showMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputMsg}
          onChange={(event) => setInputMsg(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={()=>{setShowMsg(inputMsg)}}>Update text</button>
      </div>
    </div>
  );
}

export default App;
