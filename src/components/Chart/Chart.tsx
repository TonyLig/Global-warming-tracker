import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Configuration interface for individual lines in the chart
interface LineConfig {
  name: string;
  dataKey: string | number;
  color: string;
  dot: boolean;
}

// Props interface for the Chart component
interface ChartProps<T> {
  data: T[];
  lines: LineConfig[];
  xAxis: string;
}

export default function Chart<T>({ data, lines, xAxis }: ChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 50,
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
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
