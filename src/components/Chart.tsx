import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface LineConfig<T = string> {
  name: string;
  dataKey: keyof T;
  color: string;
}

interface ChartProps<T> {
  data: T[];
  lines: LineConfig<T>[];
  xAxis: string;
}

export default function Chart<T>({ data, lines, xAxis }: ChartProps<T>) {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines.map((line, index) => (
        <Line
          dataKey={line.dataKey}
          stroke={line.color}
          name={line.name}
          key={index.toString()}
        />
      ))}
    </LineChart>
  );
}
