import React from "react";
import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <RotatingLines
      visible={true}
      height="40"
      width="40"
      color="black"
      strokeWidth="5"
      animationDuration="0.5"
      ariaLabel="rotating-lines-loading"
    />
  );
}

export default Loader;
