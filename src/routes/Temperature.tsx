import React from "react";
import { useSelector } from "react-redux";
import { getTemps } from "features/data/selectors";
import Chart from "components/Chart";

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
    <div>
      <Chart data={temps} lines={lines} xAxis="time" />
    </div>
  );
}
