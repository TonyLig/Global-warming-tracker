export interface ExtTemp {
  time: string;
  station: string;
  land: string;
}

export interface ExtCO2 {
  year: string;
  month: string;
  day: string;
  cycle: string;
  trend: string;
}

export interface ExtMethane {
  date: string;
  average: string;
  trend: string;
  averageUnc: string;
  trendUnc: string;
}

export interface ExtNO2 {}
export interface ExtArctic {}

export interface Temp {
  time: number;
  station: number;
  land: number;
}

export interface CO2 {
  year: string;
  cycle: string;
  trend: string;
  date: string;
}

export interface Methane {
  date: number;
  averageUnc: number;
}

export interface NO2 {
  date: string;
  average: string;
  trend: string;
  averageUnc: string;
  trendUnc: string;
}

export interface Arctic {
  Column1: number;
  year: number;
  month: number;
  ["data-type"]: string;
  hemisphere: string;
  extent: number;
  area: number;
  rank: number;
}
