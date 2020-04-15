// Variable Types

// any (want to avoid)
let anyVariable: any = 35;
let anyVariable2: any = true;
let anyVariable3: any = "Hello World";

// using multiple types (want to avoid when possible)
let multipleVariable: boolean | number = 35; /* Could also be 'true*/
let multipleVariable2: number | string = "Hello World"; /* Could also be 35*/

// Implicit versus Explicit
const explicitVariable: number[] = [1, 2, 3];
const implicitVariable = [1, 2, 3];

// To check type of variable
if (variableName instanceof className) {
  // code goes here...ignore errors
}

// To cast a variable to a specific type
let notAString: any = "Hello World";
let strLength = (notAString as string).length;
let strLength2 = (<string>notAString).length;

// Arrays
let numArray: number[] = [1, 2, 3];
let multipleArray: (number | string)[] = [1, 2, "Hello"];
let nestedArray: number[][] = [
  [1, 2],
  [3, 4],
];

// Tuple
const tupleArray: [string, number] = ["Hello", 35];
const tupleArray2: [string, number] = [
  35,
  "Hello World",
]; /*Has to be in decleration order */

// Enums - allow you to define a set of named constants, can be numbers or strings
enum exampleNumEnum {
  dog = 0,
  cat = 1,
  bird = 2,
}
enum exampleNumEnum2 /*will automatically index starting at 0*/ {
  dog,
  cat,
  bird,
}
enum exampleStrEnum {
  dog = "Milo",
  cat = "Whiskers",
  bird = "Stupid",
}
const animalAsNumber: number = exampleNumEnum2.dog; /* 0 */
const animalAsString: string = exampleNumEnum2[1]; /* cat */

// To specify a paramter type
function add(value1: number, value2: number) {
  /* follow the variable name with the type of variable it is */
  return value1 + value2;
}

// To specify a return type
function combine(string1: string, string2: string): string {
  /* follow the parameters with a colon and the type of variable it should return */
  return `I am combining ${string1} and ${string2}.`;
}
function wontWork(num1: number, num2: number): number {
  return "This won't work, it's expecting to return a number!";
}
function voidExample(): void {
  /* when you don't need to return anything */
  add(1, 2);
}
function neverExample(): never {
  /* used for error handling, as it will 'never' return anything */
  throw Error;
}

// Using interfaces
import { IPerson } from "./person.interface";
const examplePerson: IPerson = {
  firstName: "Jack",
  lastName: "Black",
  age: 123456,
}; /* initialise variable as type IPerson*/
examplePerson.firstName = "Logan"; /* set new values to IPerson variable*/
examplePerson.lastName = "Garay";
examplePerson.age = 22;

// If you need to import multiple interfaces, to save lines of code use a 'barrel'
import {
  IDog,
  ICat,
  IBird,
} from "./interfaces"; /* For some reason, don't need to include 'interfaces.index' */
const exampleIDog: IDog = { age: 10 };
const exampleICat: ICat = { name: "Whiskers" };
const exampleIBird: IBird = { canFly: false };

// Intersection types - allows you to create an object or variable of multiple types
let dogCatBird: IDog & ICat & IBird;
dogCatBird.age = 50;
dogCatBird.name = "Creature";
dogCatBird.canFly = true;

// Using Classes
import { Person } from "./person.model";
const person1: Person = new Person();
person1.firstName = "Logan";

const person2: Person = new Person({ age: 22 });
person2.lastName = "Garay";

// Generics - use the type 'T' - used when you will pass multiple data types or don't know the specific type being passed
function exampleGeneric<T>(arg: T): T {
  return arg;
}
exampleGeneric("Hello World");

function exampleGeneric2<T>(arg: T[]): T[] {
  return arg;
}
exampleGeneric2([1, 2, 3]);

function exampleGeneric3<T>(arg: T[]): T {
  return arg[2];
}
exampleGeneric3([1, 2, 3, 4]);

// Access modifiers
// NOTE use FreeCodeCamp's resources to finish this

// To compile .ts files to javascript files => 'tsc BasicInfo.ts'
/* To check your javascript => at the top of your file put "// @ts-check"*/
