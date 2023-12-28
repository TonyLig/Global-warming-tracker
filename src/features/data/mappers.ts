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
} from "types";

export function transformMyTemps(data: ExtTemp): Temp {
  return {
    time: Math.round(Number(data.time)),
    station: Number(data.station),
    land: Number(data.land),
  };
}

export function transformMyCO2(data: ExtCO2): CO2 {
  const year = Number(data.year);
  const month = Number(data.month);
  const day = Number(data.day);
  return {
    ...data,
    date: new Date(year, month, day).toISOString(),
  };
}

export function transformMyMethane(data: ExtMethane): Methane {
  return {
    date: Math.round(Number(data.date)),
    average: Number(data.average),
    trend: Number(data.trend),
  };
}

export function transformMyNO2(data: ExtNO2): NO2 {
  return {
    date: Math.round(Number(data.date)),
    average: Number(data.average),
  };
}

export function transformMyArctic(data: ExtArctic): Arctic {
  return {
    year: data.year,
    month: data.month,
    rank: data.rank,
  };
}
