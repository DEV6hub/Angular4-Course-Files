export class Person {
  handedness: "left" | "right";
  age: number;

  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}
