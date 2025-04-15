// redux/action.js
import { ADD, REDUCE, THEME } from "./ActionType";

export const handleAdd = () => ({
  type: ADD,
});

export const handleReduce = () => ({
  type: REDUCE,
});

export const handleTheme = (theme) => ({
  type: THEME,
  payload: theme, 
});
