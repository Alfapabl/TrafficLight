//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Light from "./component/traffic-light.js";

//render your react application
ReactDOM.render(<Light />, document.querySelector("#app"));
