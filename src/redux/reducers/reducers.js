const initialState = {
  counter: 10,
  isLoggedIn: false,
  user: {
    username: "",
    email: "",
    password: "",
  },
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
    case "login":
      return {
        isLoggedIn: true,
      };
    case "saveUser":
      return {
        user: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
