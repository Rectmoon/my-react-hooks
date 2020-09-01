import { useState } from "react";
import useEventListener from "./useEventListener";

export function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);
  const handleKeyDown = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };
  const handleKeyUp = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEventListener("keydown", handleKeyDown);
  useEventListener("keyup", handleKeyUp);

  return keyPressed;
}

export function useMultiKeyPress() {
  const [keysPressed, setKeyPressed] = useState(() => new Set([]));
  const handleKeyDown = ({ key }) => {
    setKeyPressed(keysPressed.add(key));
  };
  const handleKeyUp = ({ key }) => {
    keysPressed.delete(key);
    setKeyPressed(keysPressed);
  };

  useEventListener("keydown", handleKeyDown);
  useEventListener("keyup", handleKeyUp);

  return keysPressed;
}

/* 
  function App() {
    const happyPress = useKeyPress('h');
    const sadPress = useKeyPress('s');
    const robotPress = useKeyPress('r');
    const foxPress = useKeyPress('f');

    return (
      <div>
        <div>h, s, r, f</div>
        <div>
          {happyPress && '😊'}
          {sadPress && '😢'}
          {robotPress && '🤖'}
          {foxPress && '🦊'}
        </div>
      </div>
    )
  }

  function App() {
    const keysPressed = useMultiKeyPress();

    console.log([...keysPressed]);

    return ( 
      <div>
        <h1>hello</h1>
        {[...keysPressed].map((key) => (
          <p key={key}>{`${key} key pressed`}</p>
        ))}
      </div>
    );
  }
 */
