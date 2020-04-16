// Variable Types

// any (want to avoid)
let anyVariable: any = 35;
let anyVariable2: any = true;
let anyVariable3: any = 'Hello World';

// using multiple types (want to avoid when possible)
let multipleVariable: boolean | number = 35; /* Could also be 'true*/
let multipleVariable2: number | string = 'Hello World'; /* Could also be 35*/
console.log(multipleVariable2);

// Implicit versus Explicit
const explicitVariable: number[] = [1, 2, 3];
const implicitVariable = [1, 2, 3];

// To check type of variable
if (variableName instanceof className) {
  // code goes here...ignore errors
}

// To cast a variable to a specific type
let notAString: any = 'Hello World';
let strLength = (notAString as string).length;
let strLength2 = (<string>notAString).length;

// Numbers - are flaoting point values, can be binary and hex values
let num: number = 0.222;
let hex: number = 0xbeef;
let bin: number = 0b0010;

// Arrays
let numArray: number[] = [1, 2, 3];
let numArray2: Array<number> = [1, 2, 3];
let multipleArray: (number | string)[] = [1, 2, 'Hello'];
let nestedArray: number[][] = [
  [1, 2],
  [3, 4],
];

// Tuple - like an array, but you define what type of data is stored in each position
const tupleArray: [string, number] = ['Hello', 35];
const tupleArray2: [string, number] = [
  35,
  'Hello World',
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
  dog = 'Milo',
  cat = 'Whiskers',
  bird = 'Stupid',
}
const animalAsNumber: number = exampleNumEnum2.dog; /* 0 */
const animalAsString: string = exampleNumEnum2[1]; /* cat */

/

// To compile .ts files to javascript files => 'tsc BasicInfo.ts'
/* To check your javascript => at the top of your file put "// @ts-check"*/
