import { createSlice } from "@reduxjs/toolkit";

import { Temp, CO2, NO2, Methane, Arctic } from "types";
import { requestData } from "./asyncActions";

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
  name: "apiData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(requestData.pending, (state) => ({
      ...state,
      pending: true,
    }));

    builder.addCase(requestData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    });

    builder.addCase(requestData.rejected, (state, action) => {
      return {
        ...state,
        error: action.error.message,
        pending: false,
      };
    });
  },
});

export default stateSlice.reducer;
