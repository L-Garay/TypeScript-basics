class Horse {
  readonly name: string;
  readonly canJump: boolean = true;
  constructor(name: string) {
    this.name = name;
  }
}

let Larry = new Horse('Larry');
// readonly properties can never be modified and must be initialized at their declaration (like 'canJump') or in the constructor (like 'name') => Larry will have both properties, even though you only had to supply the name property

// NOTE a better version of the above example  && you can interchange readonly for private or protected or public
class Horse2 {
  readonly canJump: boolean = true;
  constructor(
    readonly name: string
  ) {} /* Creates and initializes a member in one place*/
}
let Harry = new Horse2('Harry');

// NOTE ACCESSORS - allow you to interact with members of an object to control how a member is set/accessed
// the original property of _fullName can never be directly manipulated unless accessed throught he public 'set' method which provides a check of the data trying to be set
const fullNameMaxLength = 10;
class Horse3 {
  private _fullName: string;

  public get FullName(): string {
    return this._fullName;
  }

  public set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error('fullName has a max length of' + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}
let Barry = new Horse3();
Barry.fullName = 'Barry';
Barry.FullName; /* Should return 'Barry' */
Barry.fullName = 'Too long of a name';
Barry.FullName; /* Should return 'undefined' because the set method would have thrown an error due to the name being too long*/
