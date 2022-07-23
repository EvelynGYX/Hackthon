import React from "react";

const Section = ({ header, children }) => {
  return (
    <div>
      <div style={{display: 'flex',}}>
        <h2 style={{fontWeight: 400}}>
          {header.toUpperCase()}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
