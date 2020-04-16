class Dog {
  private name: string;
  protected age: number;
  public color: string;

  constructor(name: string, age: number, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  public defineDog() {
    return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}.`;
  }
}

let Milo = new Dog('Milo', 8, 'brown');
// You can only access the private and protected properties when defining a new class; you can't access them outside of the class itself.  See below
Milo.name = 'Duke';
Milo.age = 5;
console.log(Milo.age);
console.log(Milo.name);
// You are able to access the public property of 'color' outside of the class && call the public method outside of the class
Milo.color = 'gold';
Milo.defineDog();
