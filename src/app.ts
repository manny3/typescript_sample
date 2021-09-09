import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

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

// const anchor = document.querySelector('a')!
// console.log(anchor.href)//  無法確定是否有值時(href)，在擷取dom元素後加上!

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// input
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }
  console.log(
    doc
  );
  
})

// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
    
  },
  spend(amount: number): number {
    console.log('I spent', amount );
    return amount
  }
}

const greetPerson= (person: IsPerson) => {
  console.log('hello', person.name)
}
greetPerson(me)
console.log(me)

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Invoice('mario', 'plumbing work', 200)

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// classes
// const invOne = new Invoice('mario', 'work on the mario web', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi web', 300)

// // console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // console.log(Invoice);

// // invOne.client = 'yoshi'; error readonly
// invTwo.amount = 400

// // console.log(invOne, invTwo);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount,
//    `format: ${inv.format()}`);
// })