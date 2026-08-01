Q1:  var: Function-scoped, can be redeclared and reassigned.let: Block-scoped, can be reassigned but not redeclared in the same scope.const: Block-scoped, cannot be reassigned or redeclared.Q2:  interface: Used primarily for object shapes and can be merged (declaration merging). Example: interface Animal { name: string; }type: Can represent objects, primitives, unions, and intersections. Cannot be merged. Example: type ID = string | number;Q3:  TypeScriptinterface User {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
}
Q4:  TypeScriptfunction sum(a: number, b: number): number {
  return a + b;
}
Q5:  TypeScriptfunction processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  }
  return value * value;
}
Q6:  TypeScriptfunction firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
Q7:  TypeScriptclass UserClass {
  constructor(public name: string, public email: string) {}
  printInfo(): void {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}
Q8:  any: Bypasses TypeScript's type checking entirely.unknown: A safer alternative; requires type checking or narrowing before performing operations on it.Q9:  TypeScriptenum Role {
  Admin = 'Admin',
  User = 'User',
  SuperAdmin = 'SuperAdmin',
}
Q10:  ==: Performs type coercion before comparing (e.g., 5 == "5" is true).===: Compares both value and type without coercion (e.g., 5 === "5" is false).
