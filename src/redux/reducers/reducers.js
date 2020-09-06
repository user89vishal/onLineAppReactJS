const initialState = {
  counter: 0,
  user: {
    username: "",
    email: "",
    password: "",
  },
  answers: [],
  skillLevel: 0,
};

function reducer(state = initialState, action) {
  console.log("state is: ", state, "::::", action.type);
  switch (action.type) {
    case "initilizeTime":
      return {
        ...state,
        // counter:
        //   state.counter === (undefined || 0) ? action.value : state.counter,
        counter: (state.counter = action.value),
      };
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter === 0 ? 0 : state.counter - 1000,
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
      return Object.assign({}, state, {
        counter: 0,
        user: {
          username: "",
          email: "",
          password: "",
        },
        answers: [],
        skillLevel: 0,
      });
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
      return Object.assign({}, state, {
        ...state,
        counter: 0,
        answers: [],
        skillLevel: 0,
      });
    }

    default:
      return state;
  }
}

export default reducer;
