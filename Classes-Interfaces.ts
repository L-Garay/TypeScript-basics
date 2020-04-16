// Using interfaces
import { IPerson } from './person.interface';
const examplePerson: IPerson = {
  firstName: 'Jack',
  lastName: 'Black',
  age: 123456,
  id: 1,
}; /* initialise variable as type IPerson*/
examplePerson.firstName = 'Logan'; /* set new values to IPerson variable*/
examplePerson.lastName = 'Garay';
examplePerson.age = 22;
examplePerson.id = 2; /* can't reassign value because interface has specified this property as 'readonly'*/

// If you need to import multiple interfaces, to save lines of code use a 'barrel'
import {
  IDog,
  ICat,
  IBird,
} from './interfaces'; /* For some reason, don't need to include 'interfaces.index' */
const exampleIDog: IDog = { age: 10, id: 2 };
const exampleIDog2: IDog = {
  age: 12,
  id: 3,
  color: 'gold',
}; /* the 'color' property is defined as optional in the interface definition, and so you can choose to include it or not*/
const exampleICat: ICat = { name: 'Whiskers', id: 3 };
const exampleIBird: IBird = { canFly: false, id: 4 };

// Intersection types - allows you to create an object or variable of multiple types
let dogCatBird: IDog & ICat & IBird;
dogCatBird.age = 50;
dogCatBird.name = 'Creature';
dogCatBird.canFly = true;

// NOTE CLASSES
// Using Classes
import { Person } from './person.model';
const person1: Person = new Person();
person1.firstName = 'Logan';

const person2: Person = new Person({ age: 22 });
person2.lastName = 'Garay';

// ACCESS MODIFIERS NOTE see model examples dog=>bird=>cat=>horse=>rat

// PUBLIC - available anywhere without any restrictions, it is the default modifier and doens't need to be explicitly declared
// PRIVATE - can only be accessed in the class they are defined
// PROTECTED - can only be accessed in the class they are defined && every child class
