export const authReducer = (state, action) => {
    switch (action.type) {

        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                username: "",
            }
        default:
            return state
    }
};


export const expenseReducer = (state, action) => {

  switch (action.type) {

    case "ADD_EXPENSE":
      return [...state, action.payload];

    case "DELETE_EXPENSE":
      return state.filter(
        (expense) => expense.id !== action.payload
      );

    default:
      return state;
  }
};