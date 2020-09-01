import React, { useState } from "react";
import { usePrevious } from "./hooks";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default App;
