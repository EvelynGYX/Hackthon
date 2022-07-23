import React from "react";
import LineChart from "./LineChart";

const LineChartSection = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          marginBottom: 50,
          width: "60%",
        }}
      >
        <LineChart />
      </div>
    </div>
  );
};

export default LineChartSection;
