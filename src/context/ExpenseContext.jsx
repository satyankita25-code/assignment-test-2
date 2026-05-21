import { createContext, useReducer } from "react";
import { expenseReducer } from "./Reducers";

export const ExpenseStateContext = createContext();

export const ExpenseDispatchContext = createContext();

export const ExpenseProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    expenseReducer,
    []
  );

  return (
    <ExpenseStateContext.Provider value={state}>

      <ExpenseDispatchContext.Provider value={dispatch}>

        {children}

      </ExpenseDispatchContext.Provider>

    </ExpenseStateContext.Provider>
  );
};