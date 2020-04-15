export class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(data?: any) {
    this.firstName = data.firstName || "No Name";
    this.lastName = data.lastName || "No Last Name";
    this.age = data.age || "You dead";
  }
}
