import { useState } from "react";

function createStorageHook(storageType) {
  return (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window[storageType].getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setItem = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window[storageType].setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setItem];
  };
}

export const useLocalStorage = createStorageHook("localStorage");
export const useSessionStorage = createStorageHook("sessionStorage");

/* 
function App() {
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

 */
