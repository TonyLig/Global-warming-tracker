import React from "react";
import { useSelector } from "react-redux";

import { getCO2 } from "features/data/slices/selectors";
import Chart from "components/Chart/Chart";
import styles from "./co2.module.css";

export default function CO2() {
  // Fetching CO2 data using Redux selector
  const co2 = useSelector(getCO2);

  // Configuration for the chart lines
  const lines = [
    {
      name: "trend Co2",
      dataKey: "trend" as const,
      color: "#ff0000",
      dot: false,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Co2 EMISSION</h1>
      <div className={styles.chart_card}>
        <Chart data={co2} lines={lines} xAxis="year" />
      </div>
    </div>
  );
}
