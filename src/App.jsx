import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "./Features/Redux/Action/Action";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  const HandleIncrement = () => {
    dispatch(Increment());
  };

  const HandleDecrement = () => {
    dispatch(Decrement());
  };

  const HandleReset = () => {
    dispatch(Reset());
  };

  return (
    <div>
      <div className="buttondiv">
        <h1>count : {value}</h1>
        <div>
          <button onClick={HandleIncrement}>Increment</button>
          <button onClick={HandleDecrement}>Decriment</button>
          <button onClick={HandleReset}>Total</button>
        </div>
      </div>
    </div>
  );
}

export default App;
