"use strict";
let age = 4;
const firstName = "joao";
const isValid = true;
let dlk = 4;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false];
const names = ["joao", "pedro"];
//tupla
const person = [1, "joao"];
// list de tuplas
const people = [
    [1, "joao"],
    [2, "pedro"]
];
// intersections
const productId = "12"; // tipo de var mais dinamico
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
console.log(direction);
