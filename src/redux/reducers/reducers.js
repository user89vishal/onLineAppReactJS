const initialState = {
  counter: 10,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    case "setStateFromLocalStorage":
      return {
        counter: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
