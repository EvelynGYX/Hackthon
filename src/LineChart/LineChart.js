import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: `Quick Overview Your District ${"\n"} Average: Good`,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        beginAtZero: false,
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  },
};

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const data = {
  labels,
  datasets: [
    {
      label: "Your police district",
      data: [123, 124, 135, 123, 189],
      borderColor: "#4053FF",
      backgroundColor: "#4053FF",
    },
    {
      label: "QLD average",
      data: [124, 123, 188, 123, 140],
      borderColor: "#BB3E03",
      backgroundColor: "#BB3E03",
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
