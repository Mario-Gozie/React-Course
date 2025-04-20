import React from "react";

export const SerchItem = () => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    ></form>
  );
};

export default SerchItem;
