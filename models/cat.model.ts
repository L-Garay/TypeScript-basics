class Cat {
  protected name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class subCat extends Cat {
  public isGrumpy: boolean;
  constructor(name: string, age: number, grumpy: boolean) {
    super(name, age);
    this.isGrumpy = grumpy;
  }
  public combineData() {
    return `Name: ${this.name}, Age: ${this.age}, isGrumpy: ${this.isGrumpy}.`;
    // NOTE you are able to access the 'protected' property of 'name' in the parent within the derived class; but you are unable to access the 'private' property of 'age' in the parent (even in the dereived class).
  }
}
let Fluffy = new subCat('Fluffy', 12, true);
Fluffy.combineData(); /* the combineData() function is public, and therefore always accessible BUT it won't work because it will be unable to access the private property of 'age' from the parent class*/
Fluffy.name; /* the name property is protected and unable to be accessed outside of parent or derived class*/
Fluffy.age; /* the age property is private and only accessible in the parent class*/
Fluffy.isGrumpy = false; /* the isGrumpy propety is public, and therefore alwasy accessible */
