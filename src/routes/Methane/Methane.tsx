import React from "react";
import { useSelector } from "react-redux";

import { getMethane } from "features/data/slices/selectors";
import Chart from "components/Chart/Chart";
import styles from "./methane.module.css";

export default function Methane() {
  // Fetching methane data using Redux selector
  const temps = useSelector(getMethane);

  // Configuration for the chart lines
  const lines = [
    {
      name: "trend",
      dataKey: "trend" as const,
      color: "#8884d8",
      dot: false,
    },
    {
      name: "average",
      dataKey: "average" as const,
      color: "#FA3A16",
      dot: false,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>METHANE</h1>
      <div className={styles.chart_card}>
        <Chart data={temps} lines={lines} xAxis="date" />
      </div>
    </div>
  );
}
