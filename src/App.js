import React, { useState } from "react";
import { useOnlineStatus } from "./hooks";
import "./styles.css";

function App() {
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default App;
