const initialState = {
  counter: 10,
  user: {
    username: "",
    email: "",
    password: "",
  },
  answers: [],
};

function reducer(state = initialState, action) {
  console.log("state is: ", state);
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
        ...state,
        counter: action.value,
      };
    case "saveUser":
      return {
        ...state,
        user: action.value,
      };
    case "logout":
      return {
        ...state,
        user: {
          username: "",
          email: "",
          password: "",
        },
      };
    case "saveOption":
      console.log("ForEach", state.answers);
      const val = state.answers.map((ans, index) =>
        ans.ansId === action.value.ansId
          ? [...state.answers.splice(index, 0, action.value)]
          : [...state.answers, action.value]
      );
      console.log("value is", val);
      return {
        ...state,
        answers: [...state.answers, action.value],
      };
    default:
      return state;
  }
}

export default reducer;

// answers: state.answers.map((ans, index) =>
// ans.ansId === action.value.ansId
//   ? [...state.answers.splice(index, 0, action.value)]
//   : [...state.answers, action.value]
