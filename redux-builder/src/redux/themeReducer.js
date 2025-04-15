// themeReducer.js
const initialTheme = "light";

export const themeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case "THEME":
      return action.payload;
    default:
      return state;
  }
};
