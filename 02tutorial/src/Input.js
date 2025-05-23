import React from "react";
import colorNames from "colornames";

export const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="test"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={(e) => setIsDarkText(!isDarkText)}>
        Toggle Text Colour
      </button>
    </form>
  );
};

export default Input;
