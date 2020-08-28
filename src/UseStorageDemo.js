import React, { useCallback } from "react";
import { useLocalStorage, useSessionStorage } from "./hooks/use-storage";

function UseStorageDemo() {
  const [mode, setMode] = useLocalStorage("MODE", "dark");
  const [mode1, setMode1] = useSessionStorage("MODE", "dark");

  const handleClick = useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  const handleClick1 = useCallback(() => {
    setMode1(mode1 === "dark" ? "light" : "dark");
  }, [mode1, setMode1]);

  return (
    <div className="use-local-storage-demo">
      <div>
        <h3>{mode}</h3>
        <button onClick={handleClick}>Click me</button>
      </div>
      <hr />
      <div>
        <h3>{mode1}</h3>
        <button onClick={handleClick1}>Click me</button>
      </div>
    </div>
  );
}

export default UseStorageDemo;
