import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface appState {
  value: number;
}

const initialState: appState = {
  value: 0,
};

export const stateSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
  },
});

export const { add } = stateSlice.actions;

export default stateSlice.reducer;
