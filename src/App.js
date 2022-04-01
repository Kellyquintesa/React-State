import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Welcome to my counter app</h1>
      <div className="value">
        <button onClick={decrement}>-</button>
        <p>{count} </p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
