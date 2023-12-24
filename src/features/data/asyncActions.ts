import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "./apis";

export const requestData = createAsyncThunk("apiData/requestData", async () => {
  const [temps, co2, methane, no2, arctic] = await Promise.all([
    apis.requestTemps(),
    apis.requestCO2(),
    apis.requestMethane(),
    apis.requestNO2(),
    apis.requestArctic(),
  ]);
  return { temps, co2, methane, no2, arctic };
});
