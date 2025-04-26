import React from "react";
import { Button } from "./Button";

export const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button />
      <Button />
      <Button />
    </form>
  );
};
