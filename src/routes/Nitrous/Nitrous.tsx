import React from "react";
import { useSelector } from "react-redux";

import { getNO2 } from "features/data/slices/selectors";
import Chart from "components/Chart/Chart";
import styles from "./nitrous.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.header}>No2 NITROUS</h1>
      <div className={styles.chart_card}>
        <Chart data={temps} lines={lines} xAxis="date" />
      </div>
    </div>
  );
}
