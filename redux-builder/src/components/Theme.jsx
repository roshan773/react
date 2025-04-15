// components/Theme.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../redux/action";

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(handleTheme("light"))}  // Pass "light" to the action
        disabled={theme === "light"}
        style={{ marginLeft: "45%" }}
      >
        Switch to Light
      </button>

      <button
        onClick={() => dispatch(handleTheme("dark"))}  // Pass "dark" to the action
        disabled={theme === "dark"}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
