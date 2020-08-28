import React from "react";
import useAsync from "./hooks/use-async";

const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve("Submitted successfully 🙌")
        : reject("Oh no there was an error 😞");
    }, 2000);
  });
};

function UseAsyncDemo() {
  const { execute, status, value, error, loading } = useAsync(myFunction, true);

  return (
    <div className="use-async-demo">
      {status === "idle" && <div>Start your journey by clicking a button</div>}
      {status === "success" && <div>{JSON.stringify(value)}</div>}
      {status === "error" && <div>{error}</div>}
      <button onClick={execute} disabled={status === "pending"}>
        {!loading ? "Click me" : "Loading..."}
      </button>
    </div>
  );
}

export default UseAsyncDemo;
