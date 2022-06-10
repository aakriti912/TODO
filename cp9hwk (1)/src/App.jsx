import React, { useState } from "react";
import "./styles.css";
function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(e) {
    const newValue = e.target.value;
    setInput(newValue);
  }
  function update() {
    setItems((prevValue) => {
      return [...prevValue, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO LIST</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} name={input} />
        <button onClick={update}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
