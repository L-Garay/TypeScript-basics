// To specify a paramter type
function add(value1: number, value2: number) {
  /* follow the variable name with the type of variable it is */
  return value1 + value2;
}

// To pass optional parameters
function printName(firstName: string, lastName?: string) {
  /* adding the 'evlivs' operator (?) will prevent an error if that parameter is not passed when calling the function*/
  if (lastName) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}.`);
  } else {
    console.log(`First Name: ${firstName}.`);
  }
}

// To assign a default value for a parameter
function printName2(firstName: string, lastName: string = 'Garay') {
  console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
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

// GENERICS - use the type 'T' - used when you will pass multiple data types or don't know the specific type being passed
function exampleGeneric<T>(arg: T): T {
  return arg;
}
exampleGeneric('Hello World');

function exampleGeneric2<T>(arg: T[]): T[] {
  return arg;
}
exampleGeneric2([1, 2, 3]);

function exampleGeneric3<T>(arg: T[]): T {
  return arg[2];
}
exampleGeneric3([1, 2, 3, 4]);
