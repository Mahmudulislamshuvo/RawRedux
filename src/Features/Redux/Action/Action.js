import { INCREMENT, DECREMENT, RESET } from "../Constant/Constant";

const Increment = (data) => {
  return {
    type: INCREMENT,
    payload: data,
  };
};

const Decrement = (data) => {
  return {
    type: DECREMENT,
    payload: data,
  };
};

const Reset = () => {
  return {
    type: RESET,
  };
};

export { Increment, Decrement, Reset };
