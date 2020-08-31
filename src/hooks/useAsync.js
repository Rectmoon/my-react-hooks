import { useState, useEffect, useCallback } from "react";

function useAsync(asyncFunction, immediate = true) {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setPending(true);
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => setValue(response))
      .catch((error) => setError(error))
      .finally(() => setPending(false));
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    pending,
    value,
    error,
    execute
  };
}

export default useAsync;

/* 
const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve('Submitted successfully 🙌')
        : reject('Oh no there was an error 😞');
    }, 2000);
  });
};

function App() {
  const {
    execute, pending, value, error,
  } = useAsync(myFunction, false);

  return (
    <div>
      {value && <div>{value}</div>}
      {error && <div>{error}</div>}
      <button onClick={execute} disabled={pending}>
        {pending ? 'Loading...' : 'Click Me'}
      </button>
    </div>
  );
}

 */
