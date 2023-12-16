import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Temp, CO2, NO2, Methane, Arctic } from "./types";

interface DataCombined {
  temps: Temp[];
  co2: CO2[];
  no2: NO2[];
  arctic: Arctic[];
  methane: Methane[];
}

export interface AppState {
  data: DataCombined;
  error: string | null;
  pending: boolean;
}

const initialState: AppState = {
  data: {
    temps: [],
    co2: [],
    methane: [],
    no2: [],
    arctic: [],
  },
  error: null,
  pending: false,
};

export const stateSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    requestDataSucceeded: (
      state: AppState,
      action: PayloadAction<DataCombined>,
    ) => {
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    },

    requestDataFailed: (state: AppState, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
      pending: false,
    }),

    setPending: (state: AppState) => ({
      ...state,
      pending: true,
    }),
  },
});

export const { requestDataSucceeded, requestDataFailed, setPending } =
  stateSlice.actions;

export default stateSlice.reducer;
