import React from "react";

// The title is a Props passed from the parent element in App.js  and destructuring is used here to pass it {title}
const Header = ({ title }) => {
  /*const headerStyle = { backgroundColor: "royalblue", color: "#fff" };*/
  return (
    <header
    /*style={{
        backgroundColor: "mediumblue",
        color: "#fff",
      }}*/

    /*style={headerStyle}*/
    >
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
}; // This come into place when there is no specified props

export default Header;
