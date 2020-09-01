import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;

/* 
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
 */
