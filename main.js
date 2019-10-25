import { getBoxStyle } from "./Spiral.js";

const boxes = [
  React.createElement("div", { style: getBoxStyle(0), key: "0" }, "1"),
  React.createElement("div", { style: getBoxStyle(1), key: "1" }, "2"),
  React.createElement(
    "div",
    { style: getBoxStyle(2), key: "2" },
    React.createElement("strong", {}, "Fizz")
  ),
  React.createElement("div", { style: getBoxStyle(3), key: "3" }, "4"),
  React.createElement(
    "div",
    { style: getBoxStyle(4), key: "4" },
    React.createElement("strong", {}, "Buzz")
  )
];

ReactDOM.render(
  React.createElement("div", {}, boxes),
  document.getElementById("app")
);
