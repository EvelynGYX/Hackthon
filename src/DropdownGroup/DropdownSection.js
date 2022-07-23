import React from "react";
import ReactSelect from "./Dropdown";

const DropdownSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <div
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 10,
        }}
      >
        <ReactSelect />
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 10,
        }}
      >
        <ReactSelect />
      </div>
    </div>
  );
};

export default DropdownSection;
