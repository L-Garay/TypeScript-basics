// NOTE ABSTRACT Classes - other classes may derive from them, but they themselves can never be instantiated directly
// methods within an abstract class that are marked as abstract do not contain implementation instructions and must be implemented in child class
abstract class Rodent {
  constructor(public name: string) {}
  printName(): string {
    return `Name: ${this.name}`;
  }
  abstract makeNoise(): void; /* must be implemented in child class*/
}

class Rat extends Rodent {
  constructor() {
    super('Stewart');
  }
  makeNoise(): void {
    console.log('You must implement your own logic for this method');
  }
  eatFood(): string {
    return 'Eating';
  }
}

let Tim = new Rodent(); /* cannot create instance of an abstract class */
let Tom: Rodent; /* creates reference to abstract type */
Tom = new Rat(); /* then assigns it to a non-abstract child class*/
Tom.printName();
Tom.makeNoise();
Tom.eatFood(); /* this method doesn't exist on abstract type; which 'Tom' references */
