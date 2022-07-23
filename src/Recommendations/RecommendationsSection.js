import React from "react";
import Recommendations from "./Recommendations";

const Recommendation = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div style={{ width: "100%" }}>
        <Recommendations />
      </div>
    </div>
  );
};

const RecommendationsSection = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <h2>Your District</h2>
        <h2>QLD Average</h2>
      </div>
      <Recommendation />
      <Recommendation />
      <Recommendation />
      <Recommendation />
      <Recommendation />
      <Recommendation />
    </div>
  );
};

export default RecommendationsSection;
