"use strict";
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
