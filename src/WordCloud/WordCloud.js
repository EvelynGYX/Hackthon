import React from "react";
import ReactWordcloud from "react-wordcloud";
import words from "./words";

const WordCloudSection = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "50%" }}>
          <ReactWordcloud words={words} />
        </div>
        <div style={{ width: "50%" }}>
          <ReactWordcloud words={words} />
        </div>
      </div>
    </div>
  );
};

export default WordCloudSection;
