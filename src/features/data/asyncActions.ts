import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "./apis";

// Async thunk action creator to handle data fetching
export const requestData = createAsyncThunk("apiData/requestData", async () => {
  // Using Promise.all to fetch data from multiple API calls concurrently
  const [temps, co2, methane, no2, arctic] = await Promise.all([
    apis.requestTemps(),
    apis.requestCO2(),
    apis.requestMethane(),
    apis.requestNO2(),
    apis.requestArctic(),
  ]);

  // Returning an object containing all fetched data
  return { temps, co2, methane, no2, arctic };
});
