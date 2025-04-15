import { ADD, REDUCE } from "./ActionType";

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case REDUCE:
      return state - 1;
    default:
      return state;
  }
};