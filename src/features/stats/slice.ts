import { createSlice } from "@reduxjs/toolkit";
import { requestData } from "features/data/asyncActions";

const initialState = {
  test: "test",
  counter: 0,
};

export const statsSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    test: (state) => {
      state.test = "test";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestData.fulfilled, (state) => ({
      ...state,
      counter: state.counter + 1,
    }));
  },
});

export default statsSlice.reducer;
