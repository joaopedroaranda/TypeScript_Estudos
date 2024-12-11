let age = 4;
const firstName: string = "joao";
const isValid: boolean = true;
let dlk: any = 4;

const ids: number[] = [1,2,3,4,5]
const booleans: boolean[] = [true, false]
const names: string[] = ["joao", "pedro"]

//tupla
const person: [number,string] = [1, "joao"]

// list de tuplas
const people: [number, string][] = [
    [1,"joao"],
    [2,"pedro"]
]

// intersections
const productId: string | number | boolean = "12"; // tipo de var mais dinamico

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = "esquerda"
}

const direction = Direction.Left
//a
console.log(direction);