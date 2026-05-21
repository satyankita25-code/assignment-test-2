import { useState, useContext } from "react";

import {
  ExpenseDispatchContext,
  ExpenseStateContext
} from "../context/ExpenseContext";

function ExpenseForm() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

 
  const dispatch = useContext(
    ExpenseDispatchContext
  );


  const expenses = useContext(
    ExpenseStateContext
  );


  const totalBalance = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const handleAddExpense = () => {

    if (!title || !amount) return;

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        title,
        amount: Number(amount),
      },
    });

    setTitle("");
    setAmount("");
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <button onClick={handleAddExpense}>
        Add Expense
      </button>

      <h2>
        Total Balance: ₹{totalBalance}
      </h2>

      {expenses.length === 0 ? (

        <h3>No Expenses Added</h3>

      ) : (

        expenses.map((expense) => (
          <div
            key={expense.id}
            className="card"
          >

            <h3>{expense.title}</h3>

            <p>
              Amount: ₹{expense.amount}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_EXPENSE",
                  payload: expense.id,
                })
              }
            >
              Delete
            </button>

          </div>
        ))

      )}

    </div>
  );
}

export default ExpenseForm;