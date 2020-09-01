import React from "react";
import { useMultiKeyPress } from "./hooks";
import "./styles.css";

function App() {
  const keysPressed = useMultiKeyPress();

  return (
    <div>
      <h1>hello</h1>
      {[...keysPressed].map((key) => (
        <p key={key}>{`${key} key pressed`}</p>
      ))}
    </div>
  );
}

export default App;
