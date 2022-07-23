import React from "react";

const Section = ({ heading, children }) => {
  return (
    <div>
      <div style={{flex: 1, alignItems: "center", justifyContent: "center"}}>{heading}</div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
