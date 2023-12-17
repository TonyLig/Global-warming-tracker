import React from "react";
import { useSelector } from "react-redux";
import { getCO2 } from "features/data/selectors";
import Chart from "components/Chart";

export default function CO2() {
  const co2 = useSelector(getCO2);
  const lines = [
    {
      name: "cycle",
      dataKey: "cycle" as const,
      color: "#8884d8",
    },
    {
      name: "trend",
      dataKey: "trend" as const,
      color: "#82ca9d",
    },
  ];
  return (
    <div>
      <Chart data={co2} lines={lines} xAxis="date" />
    </div>
  );
}
