import {
  ExtTemp,
  Temp,
  ExtCO2,
  CO2,
  ExtNO2,
  NO2,
  ExtArctic,
  Arctic,
  ExtMethane,
  Methane,
} from "./types";

export function transformMyTemps(data: ExtTemp): Temp {
  return {
    ...data,
  };
}

export function transformMyCO2(data: ExtCO2): CO2 {
  return {
    ...data,
    year: Number(data.year),
    month: Number(data.month),
    day: Number(data.day),
  };
}

export function transformMyMethane(data: ExtMethane): Methane {
  return data;
}
export function transformMyNO2(data: ExtNO2): NO2 {
  return data;
}
export function transformMyArctic(data: ExtArctic): Arctic {
  return data;
}
