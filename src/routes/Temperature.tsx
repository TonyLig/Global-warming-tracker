import React from "react";
import { useSelector } from "react-redux";
import { getTemps } from "features/data/selectors";
import Chart from "components/Chart";
import NavBar from "components/NavBar";

export default function Temperature() {
  const temps = useSelector(getTemps);
  const lines = [
    {
      name: "station",
      dataKey: "station" as const,
      color: "#8884d8",
    },
    {
      name: "land",
      dataKey: "land" as const,
      color: "#82ca9d",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center px-2">
        <h1 className="m5 m-5 rounded-2xl border border-black bg-slate-100 p-3 text-xl font-bold shadow-lg shadow-neutral-500 md:shadow-xl md:shadow-neutral-500">
          TEMPERATURE
        </h1>
        <div className=" container -z-10 rounded-2xl border border-black bg-slate-100 p-5 shadow-lg shadow-neutral-500 md:shadow-xl md:shadow-neutral-500">
          <Chart data={temps} lines={lines} xAxis="time" />
        </div>
      </div>
    </>
  );
}
