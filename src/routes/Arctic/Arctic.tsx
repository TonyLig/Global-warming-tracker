import React from "react";
import { useSelector } from "react-redux";

import { getArctic } from "features/data/slices/selectors";
import Chart from "components/Chart/Chart";
import styles from "./arctic.module.css";

export default function Methane() {
  // Fetching arctic data using Redux selector
  const temps = useSelector(getArctic);

  // Configuration for the chart lines
  const lines = [
    {
      name: "rank",
      dataKey: "rank" as const,
      color: "#FA3A16",
      dot: false,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>ARCTIC ICE</h1>
        <div className={styles.chart_card}>
          <Chart data={temps} lines={lines} xAxis="year" />
        </div>
      </div>
    </>
  );
}
