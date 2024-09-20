const Initialstate = {
  value: 0,
};

const ReducerCounter = (state = Initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "increment": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "decrements": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "reset": {
      return {
        ...state,
        value: (state.value = 0),
      };
    }
    default: {
      return state;
    }
  }
  console.log("From CounterReducer", action);
};

export { ReducerCounter };
