// Counter.jsx
import React from "react";
import { useSelector } from "react-redux";
import CounterButton from "./CounterButton";
import CounterValue from "./CounterValue";

const Counter = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme === "light" ? "light_theme" : "dark_theme"}>
      <CounterValue/>
      <CounterButton/>
    </div>
  );
};

export default Counter;
