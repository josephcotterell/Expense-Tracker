export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "Add_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transaactions],
      };
    default:
      return state;
  }
};
