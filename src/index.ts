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

//Functions
//function funcName(): typeOfReturnValue {}
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(2, 4));

//Void type, allows to specify more than one type of return value for a function.
function log(message: string | number): void {
  console.log(message);
}
//now we can pass into 'log()' string or number.
// log("hello");
// log(5);

//Interfaces  --- it's almost similar to 'type' for discribing  object, but type can be used with primitives and with unions(ex:
// type Point = number | string
// const p: Point = 1
//) , but it's not gonna work with 'interface'.
interface UserInterface {
  readonly id: number; // with 'readonly' property you can not assign a value into it.
  name: string;
  age?: number; // put '?' to make it optional property.
}

const user3: UserInterface = {
  id: 10,
  name: "John",
};

console.log(user3);

//Interface with Functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(3, 5));
console.log(sub(5, 2));

//Classes  --- are used to create Objects. constructor() method will run any time when we instantiated the object, like:
// const sam = new Person()

class Person {
  age: number;
  name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
    console.log(`My name is ${name} and I'm ${age} years old`);
  }
}

const sam = new Person(25, "Sam");
const lee = new Person(45, "Lee");

sam.age = 27;

//Data Modifiers
//By default Class properties are public, any can access them and change their values. However we can change them to 'public', 'private' or 'protected'.
//with 'private' infront of a propery, you can access and change the property within the class, and 'mike.age = 2'; will give an error.
class Person2 {
  private age: number;
  name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
    console.log(`My name is ${name} and I'm ${age} years old`);
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const mike = new Person2(30, "Mike ");

// mike.age = 2; //this does'n work, the propery is with 'private'

console.log(mike.register());

//Implement Interface in Class

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person3 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return "Hello " + this.name;
  }
}

const anna = new Person3(2, "Anna");
console.log(anna.register());
