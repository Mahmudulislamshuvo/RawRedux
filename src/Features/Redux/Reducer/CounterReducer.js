import { INCREMENT, DECREMENT, RESET } from "../Constant/Constant";

const Initialstate = {
  value: 0,
};

const ReducerCounter = (state = Initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case RESET: {
      return {
        ...state,
        value: (state.value = 0),
      };
    }
    default: {
      return state;
    }
  }
};

export { ReducerCounter };
