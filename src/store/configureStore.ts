import { configureStore } from "@reduxjs/toolkit";

import stateReducer from "features/data/slices/slice";

export const store = configureStore({
  reducer: {
    apiData: stateReducer,
  },
});
