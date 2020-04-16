export interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  favoriteColor?: string /* NOTE you can also include optional properties when defining an interface */;
  readonly id: number /* NOTE to make it so a property can only be modified whent the object is first created, add 'readonly' before property name*/;
}
