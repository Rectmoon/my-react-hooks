import React, { useRef, useState } from "react";
import { useArray } from "./hooks";
import "./styles.css";

const App = () => {
  const { add, clear, removeById, value: animals } = useArray([
    { id: "cat", name: "cat" },
    { id: "dog", name: "dog" },
    { id: "bird", name: "bird" }
  ]);

  return (
    <>
      <button onClick={() => add("tiger")}>Add animal</button>
      <button onClick={() => removeById("dog")}>Remove Dog</button>
      <button onClick={clear}>clear</button>

      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
