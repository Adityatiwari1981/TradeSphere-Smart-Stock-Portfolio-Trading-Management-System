import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalGraph({
  data,
}) {

  const options = {

    responsive: true,

    animation: {
      duration: 1200,
    },

    plugins: {

      legend: {
        position: "top",
      },

      title: {
        display: true,
        text:
          "TradeSphere Portfolio Analytics",
        font: {
          size: 18,
          weight: "bold",
        },
      },

      tooltip: {
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },

    scales: {

      y: {
        beginAtZero: true,

        grid: {
          color:
            "rgba(0,0,0,0.05)",
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const enhancedData = {

    ...data,

    datasets:
      data.datasets.map(
        (dataset) => ({

          ...dataset,

          borderRadius: 10,

          backgroundColor: [
            "#5E35B1",
            "#00A86B",
            "#42A5F5",
            "#FF9800",
            "#EF5350",
            "#AB47BC",
            "#26C6DA",
          ],

          borderWidth: 0,

          hoverBackgroundColor: [
            "#4527A0",
            "#00875A",
            "#1E88E5",
            "#FB8C00",
            "#E53935",
            "#8E24AA",
            "#00ACC1",
          ],
        })
      ),
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Bar
        options={options}
        data={enhancedData}
      />
    </div>
  );
}