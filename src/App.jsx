import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "./Features/Redux/AllSlice/Counterslice";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.count.value);
  return (
    <div>
      <div className="buttondiv">
        <h1>count : {value}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
