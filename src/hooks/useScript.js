import { useState, useEffect } from "react";

const cachedScripts = [];

function useScript(src) {
  const [scriptStatus, setScriptStatus] = useState({
    done: false,
    error: null
  });

  useEffect(() => {
    if (cachedScripts.includes(src)) {
      setScriptStatus({
        done: true,
        error: null
      });
    } else {
      cachedScripts.push(src);

      const $script = document.createElement("script");
      $script.src = src;
      $script.async = true;

      const onScriptLoad = () => setScriptStatus({ done: true, error: null });

      const onScriptError = (err) => {
        const index = cachedScripts.indexOf(src);
        if (index >= 0) cachedScripts.splice(index, 1);
        $script.remove();
        setScriptStatus({
          done: true,
          error: err
        });
      };

      $script.addEventListener("load", onScriptLoad);
      $script.addEventListener("error", onScriptError);

      document.body.appendChild($script);
    }
  }, [src]);

  return [scriptStatus.done, scriptStatus.error];
}

export default useScript;

/* 
  function App() {
    const [done, error] = useScript(
      "https://pm28k14qlj.codesandbox.io/test-external-script.js"
    );

    console.log({
      done,
      error
    });

    return (
      <div>
        {done && !error && (
          <div>
            Script function call response: <b>{TEST_SCRIPT.start()}</b>
          </div>
        )}
      </div>
    );
  }
 */
