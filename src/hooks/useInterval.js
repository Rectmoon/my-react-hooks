import { useRef, useEffect } from "react";

function useInterval(callback, delay, immediately = false, deps = []) {
  const savedCallback = useRef();

  useEffect(() => {
    if (immediately) {
      callback();
    }
  }, [immediately, callback, ...deps]);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const timer = setInterval(() => savedCallback.current(), delay);

      return () => clearInterval(timer);
    }
  }, [delay, ...deps]);
}

export default useInterval;

/* 
  const App = () => {
    const getUser = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            name: "张三"
          });
        }, 2000);
      });
    };
    const { execute, pending, value } = useAsync(getUser, false);

    useInterval(
      () => {
        console.log("cb");
        if (value) {
          console.log(value);
        }
      },
      2000,
      [value]
    );

    return (
      <div>
        {value && <div>{JSON.stringify(value)}</div>}
        <button onClick={execute} disabled={pending}>
          {pending ? "Loading..." : "Click Me"}
        </button>
      </div>
    );
  };
 */
