import { useReducer } from "react";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

function sessionReducer(state, action) {
  switch (action.type) {
    case SIGN_IN:
      const { userData, token } = action;
      return { ...state, userData, token };
    case SIGN_OUT:
      return { ...state, userData: null, token: null };
    default:
      return state;
  }
}

export default function useSessionReducer() {
  const [state, dispatch] = useReducer(sessionReducer, {
    token: null,
    userData: null,
  });

  return [state, dispatch];
}
