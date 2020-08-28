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

const useLocalStorage = createStorageHook("localStorage");
const useSessionStorage = createStorageHook("sessionStorage");

export { useLocalStorage, useSessionStorage };
