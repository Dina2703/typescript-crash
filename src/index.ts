// Basic Types
let id: number = 5;
let company: string = "Personal Blog";
let isPublished: boolean = true;
let x: any = "Hello";
//with 'any' we can reasign the variable value into any type, and it's not gonna complain.
//and we can initialize
let age: number;
//arrays
let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "string"];

// Tuple , to specify the exact types within an array. Order of types matters.
let person: [number, string, boolean] = [1, "Jo", true];
// Tuple Array

let employee: [number, string][];
employee = [
  [1, "string"],
  [2, "second_string"],
  [3, "third_string"],
];

//Unions   - one particular variable can hold more that 1 type.
//below for 'productID' we can use both a number or a string
let productID: string | number = 22;

//Enum (enumerated type), allows us to define a set of named constants either numeric or string
enum Direction1 {
  Up = 3,
  Down,
  Left,
  Right,
}
//they already have values on each, like 'Direction1.Up' = 0, 'Direction1.Down' = 1, so on, but you can change it, like 'Up = 3,'.
console.log(Direction1.Up);
//below we set enum to string type
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Up);

//Objects
// 1 way
const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Jo",
};
//OR 2 way
type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 1,
  name: "Jo",
};

//Type Assertion  - to explicity tell the compiler that we want to treat an entity as a different type.
//In below example 'cid' initially has the type of any but then we're setting customId to that and  we're specifing that we want that to be 'number' type
let cid: any = 1;
// let customerId = <number>cid;  or
let customerId = cid as number;
