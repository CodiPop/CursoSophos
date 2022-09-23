import React from "react";
import ReactDOM from "react-dom";
import ItemUser from "./components/ItemUser";
import Title from "./components/Title";
//const element = <h1>Mi app en react</h1>;
const container = document.getElementById("root");
ReactDOM.render(<React.Fragment><Title/><ItemUser/></React.Fragment>,container);
//onst root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(Mega);
