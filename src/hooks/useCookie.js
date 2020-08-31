import { useState, useCallback } from "react";

const setCookie = (name, value, days, path) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=${path}`;
};

const getCookie = (name) =>
  document.cookie.split(";").reduce((acc, next) => {
    const parts = next.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : acc;
  }, "");

function useCookie(cookieName, initialValue) {
  const [cookieValue, setCookieValue] = useState(
    () => getCookie(cookieName) || initialValue
  );

  const updateCookie = useCallback(
    (value, days = 365, path = "/") => {
      setCookieValue(value);
      setCookie(cookieName, value, days, path);
    },
    [cookieName]
  );

  const deleteCookie = useCallback(
    (path = "/") => {
      updateCookie(null, -1, path);
    },
    [updateCookie]
  );

  return [cookieValue, updateCookie, deleteCookie];
}

export default useCookie;

/* 
const App = () => {
  const [userToken, setUserToken, deleteUserToken] = useCookie('token', '0');

  render(
    <div>
      <p>{userToken}</p>
      <button onClick={() => setUserToken('123')}>Change token</button>
      <button onClick={() => deleteUserToken()}>Delete token</button>
    </div>
  );
};
 */
