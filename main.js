import { getBoxStyle } from "./Spiral.js";

// const boxes = [
//   React.createElement("div", { style: getBoxStyle(0), key: "0" }, "1"),
//   React.createElement("div", { style: getBoxStyle(1), key: "1" }, "2"),
//   React.createElement(
//     "div",
//     { style: getBoxStyle(2), key: "2" },
//     React.createElement("strong", {}, "Fizz")
//   ),
//   React.createElement("div", { style: getBoxStyle(3), key: "3" }, "4"),
//   React.createElement(
//     "div",
//     { style: getBoxStyle(4), key: "4" },
//     React.createElement("strong", {}, "Buzz")
//   )
// ];

const boxes = [];

for (var i = 1; i < 16; i++) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    boxes.push(
      React.createElement("div", { style: getBoxStyle(i - 1), key: i - 1 }, i)
    );
  } else if (i % 3 !== 0) {
    boxes.push(
      React.createElement(
        "div",
        { style: getBoxStyle(i - 1), key: i - 1 },
        React.createElement("strong", {}, "Fizz")
      )
    );
  } else if (i % 5 !== 0) {
    boxes.push(
      React.createElement(
        "div",
        { style: getBoxStyle(i - 1), key: i - 1 },
        React.createElement("strong", {}, "Buzz")
      )
    );
  }
}

ReactDOM.render(
  React.createElement("div", {}, boxes),
  document.getElementById("app")
);
