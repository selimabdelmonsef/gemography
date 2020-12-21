import { Spinner } from "reactstrap";
import React from "react";
export const SpinnerFooter = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};
