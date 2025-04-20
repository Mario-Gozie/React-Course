import React from "react";

export const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{ background: colorValue, color: isDarkText ? "#000" : "#FFF" }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colourValue: "Empty Color Value",
};
export default Square;
