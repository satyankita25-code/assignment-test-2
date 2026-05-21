import { useContext } from "react";

import {
  AuthStateContext,
} from "./context/AuthContext";

import Login from "./components/Login";
import ExpenseForm from "./components/ExpenseForm";
function App() {

  const { isAuthenticated } = useContext(
    AuthStateContext
  );

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="container">

      <ExpenseForm />


    </div>
  );
}

export default App;