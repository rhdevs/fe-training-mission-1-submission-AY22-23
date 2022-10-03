/**
 * HOMEWORK
 * rename this file to *your name*.ts
 * Translate this JS code into valid TypeScript that follows good practices,
 * following instructions in the comments
 */

// replace all `var` declarations appropriatly

const NINE_THOUSAND: number = 9000
let number: number = 6
number = 7

// create a type alias (rmb type alias names use PascalCase)
let bob:student;
let steve:student;
let mary:student;
type student = {
    name: string,
    year: number,
    friends: String[]
    favouriteVariable: number|string;
}
bob = {
  name: 'Bob',
  year: 2,
  friends: ['Steve'],
  favouriteVariable: 23,
}

steve = {
  name: 'Steve',
  year: 1,
  friends: ['Bob', 'Mary'],
  favouriteVariable: 'hello', // note that this shall ONLY be string or number
}

mary = {
  name: 'Mary',
  year: 1,
  friends: ['Steve'],
  favouriteVariable: 100,
}

let students: student[] = [bob, steve, mary] // assign an appropriate type to `students`

// convert to anonymous function
// use string literals
// add appropriate type declarations to function args
/*
function printNameAndYear(student) {
  var text = student.name + ' is year ' + student.year
  console.log(text)
}*/
const printNameAndYear: Function = (x:student) =>`${x.name} is year ${x.year}`
/*
function introduceSelf(student) {
  var text =
    'Hello! I am ' + student.name + ' and my favourite variable is ' + student.favouriteVariable
  console.log(text)
}
*/
const introduceSelf: Function = (x:student) => `Hello! I am ${x.name} and my favourite variable is ${x.favouriteVariable}`
printNameAndYear(bob)
introduceSelf(bob)
printNameAndYear(steve)
introduceSelf(steve)
printNameAndYear(mary)
introduceSelf(mary)

// use short_circuit
// rmb to replace all `var`

const a: number = 1
const b: string = 'bee'
const c: number[] = [3, 4, 5]

a === 1 && console.log('a is one')
b.length > 0&&console.log('b is a non-empty string')
c.length === 3 && c[0] === 3&&console.log('c is an array of length 3, and its first element is the number 3')

// use ternary operator
const s = 'is a loooooooooong string'
s.length > 10?
console.log('s is a long string'):
console.log('s is a short string');

// use map() or reduce()
const numbers: number[] = [1, 2, 3, 4, 5]
let newNumbers: number[] = numbers.map((x:number)=> x+ numbers.indexOf(x));
/*
for (let i = 0; i < numbers.length; i++) {
  newNumbers[i] = numbers[i] + i
}*/
console.log('newNumbers:', newNumbers)

const product = numbers.reduce((x, y)=> x*y);
/*
for (let i = 0; i < numbers.length; i++) {
  product *= numbers[i]
}*/
console.log('product:', product)

// use spread operator to create newBla from bla
const bla = {
  a: 12,
  b: 23,
  c: 54,
  d: 245,
  e: 34,
  f: 56,
}
// note that some elements in newBla are similar to bla
const newBla = {
    ...bla, c:3, d:4
};
/*
const newBla = {
  a: 12,
  b: 23,
  c: 3,
  d: 4,
  e: 34,
  f: 101,
}*/

console.log('newBla', newBla)