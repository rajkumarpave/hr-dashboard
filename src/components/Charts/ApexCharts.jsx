import React from "react";
import ReactApexChart from "react-apexcharts";

export const ApexCharts = ({ seriesData, options }) => {
  const defaultOptions = {
    chart: {
      type: "line",
      stacked: false,
      toolbar: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      title: {
        text: " ",
      },
      type: "datetime",
      labels: {
        format: "MMM",
      },
    },
    yaxis: {
      title: {
        text: " ",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <>
      <ReactApexChart
        height={"100%"}
        options={{ ...defaultOptions, ...options }}
        series={seriesData}
        type="line"
      />
    </>
  );
};
