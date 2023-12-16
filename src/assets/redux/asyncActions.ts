import {
  requestDataSucceeded,
  requestDataFailed,
  setPending,
} from "./stateSlice";

import * as apis from "./apis";

export function requestData() {
  return async function (dispatch, getState) {
    dispatch(setPending());
    try {
      const [temps, co2, methane, no2, arctic] = await Promise.all([
        apis.requestTemps(),
        apis.requestCO2(),
        apis.requestMethane(),
        apis.requestNO2(),
        apis.requestArctic(),
      ]);
      dispatch(requestDataSucceeded({ temps, co2, methane, no2, arctic }));
    } catch (error) {
      dispatch(requestDataFailed(error.message));
    }
  };
}
