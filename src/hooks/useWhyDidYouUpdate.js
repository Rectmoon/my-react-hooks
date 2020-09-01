import { useEffect, useRef } from "react";

function useWhyDidYouUpdate(name, props) {
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changes = {};

      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changes[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });

      if (Object.keys(changes).length) {
        console.log("[why-did-you-update]", name, changes);
      }
    }

    previousProps.current = props;
  });
}

export default useWhyDidYouUpdate;
