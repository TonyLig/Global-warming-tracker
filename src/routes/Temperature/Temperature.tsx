import React from "react";
import { useSelector } from "react-redux";

import { getTemps } from "features/data/slices/selectors";
import Chart from "components/Chart/Chart";
import styles from "./temperature.module.css";

export default function Temperature() {
  // Fetching temperature data using Redux selector
  const temps = useSelector(getTemps);

  // Configuration for the chart lines
  const lines = [
    {
      name: "station",
      dataKey: "station" as const,
      color: "#8884d8",
      dot: false,
    },
    {
      name: "land",
      dataKey: "land" as const,
      color: "#82ca9d",
      dot: false,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>TEMPERATURE</h1>
      <div className={styles.chart_card}>
        <Chart data={temps} lines={lines} xAxis="time" />
      </div>
    </div>
  );
}
