const Increment = (data) => {
  return {
    type: "increment",
    payload: data,
  };
};

const Decrement = (data) => {
  return {
    type: "decrements",
    payload: data,
  };
};

const Reset = () => {
  return {
    type: "reset",
  };
};

export { Increment, Decrement, Reset };
