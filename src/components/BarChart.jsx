import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { NavLink } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const porcentajes = [95, 90, 80, 85, 85, 75, 75];
const labels = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "NODE",
  "REACT",
  "MONGO",
  "EXPRESS",
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "SKILLS"
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      data: porcentajes,
      label: "%",
      labelPosition: "right",
      backgroundColor: [
        "rgba(228, 85, 45,0.3)",
        "rgba(45, 83, 229,0.3)",
        "rgba(247, 205, 3, 0.3)",
        "rgba(134, 207, 47,0.3)",
        "rgba(102, 219, 251, 0.3)",
        "rgba(39, 141, 59, 0.3)",
        "rgba(201, 203, 207, 0.3)",
      ],
      hoverBorderWidth: 1,
      hoverBorderRadius: 10,
    },
  ],
};

export function BarChart() {
  return (
    <>
    <div className="border flex justify-around items-center col-start-6 col-span-2">
      <NavLink to="/about/skill" className="border-none">Skills</NavLink>
      <NavLink to="/about/education" className="border-none">Education</NavLink>
    </div>
    <div className="row-start-2 row-span-6 col-span-10 col-start-2 flex justify-center">
      <Bar options={options} data={data} />
    </div>
    </>
  );
}
