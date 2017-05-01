export class Person {
  id: number;
  gender: 'male' | 'female';
  age: number;
  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}
