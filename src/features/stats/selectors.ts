import { RootState } from "store";
import { createSelector } from "@reduxjs/toolkit";

export const getCounter = (state: RootState) => state.stats.counter;
