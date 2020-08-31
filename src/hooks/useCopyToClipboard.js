import { useState, useEffect } from "react";
import copyToClipboard from "../utils/copyToClipboard";

function useCopyToClipboard(duration = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isCopied, duration]);

  return [
    isCopied,
    (text) => {
      setIsCopied(copyToClipboard(text));
    }
  ];
}

export default useCopyToClipboard;

/* 
  const App = () => {
    const [isCopied, setIsCopied] = useCopyToClipboard();

    const copy = () => {
      setIsCopied('hello');
    };

    return (
      <button onClick={copy} type="button">
        {isCopied ? 'Copied' : 'Copy'}
      </button>
    );
  };
 */
