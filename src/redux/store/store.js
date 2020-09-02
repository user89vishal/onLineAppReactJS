import { createStore } from "redux";
import rootReducer from "../reducers/reducers";

function saveToLocalStorage(state) {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log("Error while saving in localStorage", e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) return undefined;
    return JSON.parse(serializeState);
  } catch (e) {
    console.log("Error while retriving from localStorage", e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();
console.log("persistedState", persistedState);

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
