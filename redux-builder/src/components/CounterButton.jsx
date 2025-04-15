// CounterButtons.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../redux/action";

const CounterButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
      <button onClick={() => dispatch(handleReduce(1))}  style={{marginLeft:"20px"}}>REDUCE</button>
    </div>
  );
};

export default CounterButton;
