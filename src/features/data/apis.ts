import axios from "axios";
import {
  Temp,
  ExtTemp,
  CO2,
  ExtCO2,
  Methane,
  ExtMethane,
  NO2,
  ExtNO2,
  Arctic,
  ExtArctic,
} from "./types";

// Importing transformation functions for data mapping
import {
  transformMyArctic,
  transformMyCO2,
  transformMyMethane,
  transformMyNO2,
  transformMyTemps,
} from "./mappers";

// START function to fetch data and transform it
export async function requestTemps(): Promise<Temp[]> {
  const resp = await axios.get<{ result: ExtTemp[] }>(
    " https://global-warming.org/api/temperature-api",
  );
  return resp.data.result.map(transformMyTemps);
}

export async function requestCO2(): Promise<CO2[]> {
  const resp = await axios.get<{ co2: ExtCO2[] }>(
    " https://global-warming.org/api/co2-api",
  );
  return resp.data.co2.map(transformMyCO2);
}

export async function requestMethane(): Promise<Methane[]> {
  const resp = await axios.get<{ methane: ExtMethane[] }>(
    " https://global-warming.org/api/methane-api",
  );
  return resp.data.methane.map(transformMyMethane);
}

export async function requestNO2(): Promise<NO2[]> {
  const resp = await axios.get<{ nitrous: ExtNO2[] }>(
    " https://global-warming.org/api/nitrous-oxide-api",
  );
  return resp.data.nitrous.map(transformMyNO2);
}

export async function requestArctic(): Promise<Arctic[]> {
  const resp = await axios.get<{ arcticData: ExtArctic[] }>(
    " https://global-warming.org/api/arctic-api",
  );
  return resp.data.arcticData.map(transformMyArctic);
}
