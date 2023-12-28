import React from "react";
import { useSelector } from "react-redux";
import { getNO2 } from "features/data/selectors";
import Chart from "components/Chart";

export default function Methane() {
  // Fetching NO2 data using Redux selector
  const temps = useSelector(getNO2);

  // Configuration for the chart lines
  const lines = [
    {
      name: "average",
      dataKey: "average" as const,
      color: "#FA3A16",
      dot: false,
    },
  ];

  return (
    <div className="flex flex-col items-center  justify-center px-2">
      <h1 className="m5 m-5 rounded-2xl border border-black bg-slate-100 p-3 text-xl font-bold shadow-lg shadow-neutral-500 md:shadow-xl md:shadow-neutral-500">
        No2 NITROUS
      </h1>
      <div className=" container rounded-2xl border border-black bg-slate-100 p-5 shadow-lg shadow-neutral-500 md:shadow-xl md:shadow-neutral-500">
        <Chart data={temps} lines={lines} xAxis="date" />
      </div>
    </div>
  );
}
