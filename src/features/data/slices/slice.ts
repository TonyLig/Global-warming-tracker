import { createSlice } from "@reduxjs/toolkit";

import { Temp, CO2, NO2, Methane, Arctic } from "../types/types";
import { requestData } from "../apis/asyncActions";

// Combined data interface for the app state
interface DataCombined {
  temps: Temp[];
  co2: CO2[];
  no2: NO2[];
  arctic: Arctic[];
  methane: Methane[];
}

// Application state interface
export interface AppState {
  data: DataCombined;
  error: string | null;
  pending: boolean;
}

// Initial state for the application
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

// Creating a Redux slice
export const stateSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
