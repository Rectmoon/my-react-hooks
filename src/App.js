import React from "react";
import UseAsyncDemo from "./UseAsyncDemo";
import UseEventListenerDemo from "./UseEventListenerDemo";
import UseStorageDemo from "./UseStorageDemo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>UseAsyncDemo</h2>
      <UseAsyncDemo />
      <hr />
      <br />
      <br />
      <h2>UseEventListenerDemo</h2>

      <UseEventListenerDemo />
      <hr />
      <br />
      <br />

      <UseStorageDemo />
      <hr />
      <br />
      <br />
    </div>
  );
}

export default App;
