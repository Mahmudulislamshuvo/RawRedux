import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../AllSlice/Counterslice";

export default configureStore({
  reducer: {
    count: CounterSlice,
  },
});
