import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
//explicit types
var character;
//arrays
var ninjas = [];
// ninjas.push(2)
ninjas.push('shaun');
//union typescript
var mixed = [];
mixed.push('hello');
mixed.push(20);
// function basic
//error
// const add = (a: number, b: number, c: number | string) => {
var add = function (a, b, c) {
    console.log(a + b);
};
add(5, 10);
var minus = function (a, b) {
    return a + b;
};
minus(5, 10);
// const logDetails = (uid: StringOrNum, item: string): void => {
//   console.log(`${uid} ${item}`);
// }
// const greet = (user: {name: string, uid: StringOrNum}): void => {
var greet = function (user) {
    console.log(user.name + " " + user.uid);
};
// Function Signatures
var logDetails;
logDetails = function (ninja) {
    console.log("" + ninja.name + ninja.age);
};
// const anchor = document.querySelector('a')!
// console.log(anchor.href)//  無法確定是否有值時(href)，在擷取dom元素後加上!
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// input
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
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
