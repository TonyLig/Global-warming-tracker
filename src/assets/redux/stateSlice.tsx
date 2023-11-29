import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface appState {
  value: number;
}

const initalState: appState = {
  value: 0,
};

export const stateSlice = createSlice({
  name: "app",
  initalState,
  reducers: {},
});

export const {} = stateSlice.actions;

export default stateSlice.reducer;
