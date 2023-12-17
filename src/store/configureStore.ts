import { configureStore } from "@reduxjs/toolkit";

import stateReducer from "features/data/slice";
import statsReducer from "features/stats/slice";

export const store = configureStore({
  reducer: {
    apiData: stateReducer,
    stats: statsReducer,
  },
});
