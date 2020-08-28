import React, { useState, useCallback } from "react";
import useEventListener from "./hooks/use-event-listener";

function UseEventListenerDemo() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      console.log({ clientX, clientY });
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", handler);

  return (
    <div className="use-event-listener-demo">
      The mouse position is ({coords.x}, {coords.y})
    </div>
  );
}

export default UseEventListenerDemo;
