import { createContext } from "react";
import useSessionReducer, {
  SIGN_IN,
  SIGN_OUT,
} from "../hooks/useSessionReducer";

export const SessionContext = createContext({
  session: null,
  signIn: () => {},
  logout: () => {},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();

  function signIn(token, userData) {
    dispatch({ type: SIGN_IN, token, userData });
  }

  function logout() {
    dispatch({ type: SIGN_OUT });
  }

  const value = {
    session,
    signIn,
    logout,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
