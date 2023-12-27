import React from "react";
import { PolarArea } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["HTML", "CSS", "JAVASCRIPT", "NODE", "REACT", "MONGO", "EXPRESS"],
  datasets: [
    {
      label: "%",
      data: [95, 90, 80, 85, 85, 75, 75],
      backgroundColor: [
        "rgba(228, 85, 45,0.3)",
        "rgba(45, 83, 229,0.3)",
        "rgba(247, 205, 3, 0.3)",
        "rgba(134, 207, 47,0.3)",
        "rgba(102, 219, 251, 0.3)",
        "rgba(39, 141, 59, 0.3)",
        "rgba(201, 203, 207, 0.3)",
      ],
      borderWidth: 1,
      hoverBorderWidth: 3,
    },
  ],
};

export function PolarChart() {
  return (
    <div className="row-start-2 row-span-5 col-start-1 col-span-full flex border justify-center">
      <PolarArea data={data} />
    </div>
  );
}
