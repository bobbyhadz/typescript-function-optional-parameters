export {};

// EXAMPLE 1 - Setting optional parameters in Functions using TypeScript

function sum(a: number, b?: number) {
  if (b) {
    return a + b;
  }

  return a + a;
}

console.log(sum(10)); // 👉️ 20
console.log(sum(10, 3)); // 👉️ 13

// ---------------------------------------------------

// // EXAMPLE 2 - Marking parameter as option with default value

// function multiply(a: number, b = 10) {
//   return a * b;
// }

// console.log(multiply(5)); // 👉️ 50
// console.log(multiply(5, 2)); // 👉️ 10

// ---------------------------------------------------

// // EXAMPLE 3 - Marking a property in an object parameter as option

// function getEmployee({
//   name = 'Bobby',
//   salary,
// }: {
//   name?: string; // 👈️ Mark optional
//   salary: number;
// }) {
//   return { name, salary };
// }

// // 👇️ {name: 'Bobby', salary: 100}
// console.log(getEmployee({ salary: 100 }));

// ---------------------------------------------------

// // EXAMPLE 4 - Setting optional parameters implicitly

// // ✅ Optional parameter with a default value
// function multiply(a: number, b = 10) {
//   return a * b;
// }

// console.log(multiply(5)); // 👉️ 50
// console.log(multiply(5, 2)); // 👉️ 10

// ---------------------------------------------------

// // EXAMPLE 5 - Setting the properties in an object parameter to optional

// function getEmployee({
//   name = 'bobby hadz', // 👈️ default value
//   salary,
// }: {
//   name?: string; // 👈️ Mark optional
//   salary: number;
// }) {
//   return { name, salary };
// }

// // 👇️ { name: 'bobby hadz', salary: 100 }
// console.log(getEmployee({ salary: 100 }));

// ---------------------------------------------------

// // EXAMPLE 5 - Omit one optional parameter while providing another in TS

// function logArguments(num: number, str?: string, arr?: string[]) {
//   console.log(num);
//   console.log(str);
//   console.log(arr);
// }

// // 👇️ omit the second parameter (providing 3rd)
// logArguments(100, undefined, ['a', 'b', 'c']);

// // 👇️ omit the third parameter
// logArguments(100, 'hello');

// // 👇️ omit the second and third parameters
// logArguments(100);

// ---------------------------------------------------

// // EXAMPLE 6 - Define optional Parameters in a Class constructor in TS

// class Employee {
//   // 👇️ provide default values
//   constructor(
//     public id = 0,
//     public name = '',
//     public tasks: string[] = [],
//   ) {
//     this.id = id;
//     this.name = name;
//     this.tasks = tasks;
//   }
// }

// const employee = new Employee();
// console.log(employee.id); // 👉️ 0

// ---------------------------------------------------

// // EXAMPLE 7 - Marking a constructor parameter as optional

// class Person {
//   // 👇️ mark as optional
//   constructor(public address?: { country: string; city: string }) {
//     this.address = address;
//   }
// }

// const person = new Person();

// console.log(person.address); // 👉️ undefined
