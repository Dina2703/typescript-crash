"use strict";
// Basic Types
let id = 5;
let company = "Personal Blog";
let isPublished = true;
let x = "Hello";
//with 'any' we can reasign the variable value into any type, and it's not gonna complain.
//and we can initialize
let age;
//arrays
let ids = [1, 2, 3, 4];
let arr = [1, true, "string"];
// Tuple , to specify the exact types within an array. Order of types matters.
let person = [1, "Jo", true];
// Tuple Array
let employee;
employee = [
    [1, "string"],
    [2, "second_string"],
    [3, "third_string"],
];
//Unions   - one particular variable can hold more that 1 type.
//below for 'productID' we can use both a number or a string
let productID = 22;
//Enum (enumerated type), allows us to define a set of named constants either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 3] = "Up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
//they already have values on each, like 'Direction1.Up' = 0, 'Direction1.Down' = 1, so on, but you can change it, like 'Up = 3,'.
console.log(Direction1.Up);
//below we set enum to string type
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
//Objects
// 1 way
const user1 = {
    id: 1,
    name: "Jo",
};
const user2 = {
    id: 1,
    name: "Jo",
};
//Type Assertion  - to explicity tell the compiler that we want to treat an entity as a different type.
//In below example 'cid' initially has the type of any but then we're setting customId to that and  we're specifing that we want that to be 'number' type
let cid = 1;
// let customerId = <number>cid;  or
let customerId = cid;
//Functions
//function funcName(): typeOfReturnValue {}
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 4));
//Void type, allows to specify more than one type of return value for a function.
function log(message) {
    console.log(message);
}
const user3 = {
    id: 10,
    name: "John",
};
console.log(user3);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(3, 5));
console.log(sub(5, 2));
