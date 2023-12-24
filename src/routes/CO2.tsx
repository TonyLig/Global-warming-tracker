import React from "react";
import { useSelector } from "react-redux";
import { getCO2 } from "features/data/selectors";
import Chart from "components/Chart";
import NavBar from "components/NavBar";

export default function CO2() {
  const co2 = useSelector(getCO2);
  const lines = [
    {
      name: "trend Co2",
      dataKey: "trend" as const,
      color: "#ff0000",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="m5 m-5 rounded-2xl border border-black bg-slate-100 p-3 text-xl font-bold shadow-lg shadow-neutral-500 md:shadow-xl md:shadow-neutral-500">
          Co2 EMISSION
        </h1>
        <div className=" container rounded-2xl  border border-black bg-slate-100 p-5 shadow-lg shadow-neutral-900 md:shadow-xl md:shadow-neutral-900">
          <Chart data={co2} lines={lines} xAxis="year" />
        </div>
      </div>
    </>
  );
}
