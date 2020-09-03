const initialState = {
  counter: 10,
  user: {
    username: "",
    email: "",
    password: "",
  },
  answers: [],
  skillLevel: 0,
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
        state: undefined,
      };
    case "saveOption":
      return {
        ...state,
        answers: state.answers
          ? [
              ...state.answers.filter(
                (ans) => ans.qusId !== action.value.qusId
              ),
              action.value,
            ]
          : [action.value],
      };
    case "setSkillLevel":
      return {
        ...state,
        skillLevel: action.value,
      };
    case "summry": {
      return {
        ...state,
        skillLevel: undefined,
        counter: undefined,
        answers: undefined,
      };
    }

    default:
      return state;
  }
}

export default reducer;
