import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const getData = (state: RootState) => state.globalState.data;
export const getError = (state: RootState) => state.globalState.error;
export const getPending = (state: RootState) => state.globalState.pending;

export const getTemps = createSelector(getData, (data) => data.temps);
export const getCO2 = createSelector(getData, (data) => data.co2);
export const getNO2 = createSelector(getData, (data) => data.no2);
export const getMethane = createSelector(getData, (data) => data.methane);
export const getArctic = createSelector(getData, (data) => data.arctic);

export const getCount = createSelector(
  getTemps,
  getCO2,
  getNO2,
  getMethane,
  getArctic,
  (temps, co2, no2, methane, arctic) => {
    return {
      co2inDecember: co2.filter((item) => item.month === 12).length,
      totalItems: [...temps, ...co2, ...no2, ...methane, ...arctic].length,
    };
  },
);
