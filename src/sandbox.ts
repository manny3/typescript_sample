//explicit types
let character: string;

//arrays
let ninjas: string[] = []

// ninjas.push(2)
ninjas.push('shaun')

//union typescript
let mixed: (string|number)[] = [];
mixed.push('hello')
mixed.push(20)

// function basic
//error
// const add = (a: number, b: number, c: number | string) => {
const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
}

add(5, 10)

const minus = (a: number, b: number): number => {
  return a + b;
}

minus(5, 10)

// type aliases
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

// const logDetails = (uid: StringOrNum, item: string): void => {
//   console.log(`${uid} ${item}`);
// }
// const greet = (user: {name: string, uid: StringOrNum}): void => {
  const greet = (user: objWithName): void => {
  console.log(`${user.name} ${user.uid}`);
}

// Function Signatures
let logDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};
logDetails = (ninja: person) => {
    console.log(`${ninja.name}${ninja.age}`);
}