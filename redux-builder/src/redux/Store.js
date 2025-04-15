// redux/store.js
import { legacy_createStore, combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";  // Ensure this path is correct
import { themeReducer } from "./themeReducer";    // Ensure this path is correct

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export const store = legacy_createStore(rootReducer);
