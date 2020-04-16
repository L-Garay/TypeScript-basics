class Bird {
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Tucan extends Bird {
  private age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  public defineBird() {
    return `Name: ${this.name}, Age: ${this.age}.`;
  }
}
class Pelican extends Bird {
  private age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  public defineBird() {
    return `Name: ${this.name}, Age: ${this.age}.`;
  }
}

// You are unable to create an object of class 'Bird' because it's constructor is protected && you wouldn't want to create a generic object instead of a more specific object
let Bob = new Bird('Bob');
// You are able to create an object of class 'Tucan' and 'Pelican' because it's constructor is public
let Tim = new Tucan('Sam', 22);
let Vick = new Pelican('Vick', 12);
