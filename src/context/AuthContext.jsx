import { createContext, useReducer } from "react";
import { authReducer } from "./Reducers";

export const AuthStateContext = createContext();

export const AuthDispatchContext = createContext();

const initialState = {
  isAuthenticated: false,
  username: "",
};

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    authReducer,
    initialState
  );

  return (

    <AuthStateContext.Provider value={state}>

      <AuthDispatchContext.Provider value={dispatch}>

        {children}

      </AuthDispatchContext.Provider>

    </AuthStateContext.Provider>

  );
};