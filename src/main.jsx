import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { ExpenseProvider } from "./context/ExpenseContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <AuthProvider>

      <ExpenseProvider>

        <App />

      </ExpenseProvider>

    </AuthProvider>

  </React.StrictMode>

);