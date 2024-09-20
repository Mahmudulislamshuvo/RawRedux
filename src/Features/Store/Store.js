import { createStore } from "@reduxjs/toolkit";
import { ReducerCounter } from "../Redux/Reducer/CounterReducer";

const store = createStore(ReducerCounter);

export { store };
