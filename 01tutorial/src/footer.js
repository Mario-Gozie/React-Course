import React from "react";

function Footer({ length }) {
  const today = new Date();
  return (
    <footer>
      <p>
        {length} {length !== 1 ? "items" : "item"} Copyright &copy;{" "}
        {today.getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
