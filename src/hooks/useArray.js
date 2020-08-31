import { useState, useCallback } from "react";

function useArray(initialState) {
  const [value, setValue] = useState(initialState);

  const add = useCallback((a) => setValue([...value, a]), [value]);
  const clear = useCallback(() => setValue([]), []);
  const removeById = useCallback(
    (id) => setValue((arr) => arr.filter((v) => v && v.id !== id)),
    []
  );
  const removeIndex = useCallback(
    (index) => setValue((arr) => arr.filter((v, i) => i !== index)),
    []
  );

  return {
    value,
    add,
    clear,
    removeById,
    removeIndex
  };
}

export default useArray;

/* 
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
 */
