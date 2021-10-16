import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      // lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointRadius: 1,
      data: [1500000, 3900000, 3000000, 4100000, 2300000, 1800000, 2000000]
    }
  ]
};

const lineOptions = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: true
        },
        ticks: {
          beginAtZero: true,
          userCallback(value) {
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);
            value = value.join(".");
            return `${value}`;
          }
        }
      }
    ]
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  }
};

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const TestChart = () => (
  <div style={styles}>
    <Line data={data} options={lineOptions} />
  </div>
);

export default TestChart