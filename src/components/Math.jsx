import React from "react";
import * as math from "../math.js";

function Math() {
  return (
    <ul>
      <li>{math.add(1, 2)}</li>
      <li>{math.subtract(1, 2)}</li>
      <li>{math.multiply(1, 2)}</li>
      <li>{math.divide(1, 2)}</li>
    </ul>
  );
}

export default Math;
