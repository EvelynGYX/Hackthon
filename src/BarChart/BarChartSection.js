import React from "react";
import BarChart from "./BarChart";

const LineChartSection = () => {
  return (
    <div>
      <div></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarChart showYAxes={false} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            paddingBottom: 20,
          }}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarChart showYAxes={false} />
        </div>
      </div>
    </div>
  );
};

export default LineChartSection;
