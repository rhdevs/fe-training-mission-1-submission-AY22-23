/**
 * HOMEWORK
 * rename this file to *your name*.ts
 * Translate this JS code into valid TypeScript that follows good practices,
 * following instructions in the comments
 */

// replace all `var` declarations appropriatly

const NINE_THOUSAND = 9000
let number = 6
number = 7

// create a type alias (rmb type alias names use PascalCase)
type Person = {
    name: string
    year: number
    friends: string[]
    favouriteletiable: string | number
}
const bob : Person = {
  name: 'Bob',
  year: 2,
  friends: ['Steve'],
  favouriteletiable: 23,
}
const steve : Person = {
  name: 'Steve',
  year: 1,
  friends: ["Bob", 'Mary'],
  favouriteletiable: 'hello', // note that this shall ONLY be string or number
}
const mary : Person = {
  name: 'Mary',
  year: 1,
  friends: ["Steve"],
  favouriteletiable: 100,
}


let students: Person[] = [bob, steve, mary] // assign an appropriate type to `students`

// convert to anonymous function
// use string literals
// add appropriate type declarations to function args

//answer
const printNameAndYear = (student: Person) => {
    let text = student.name + ' is year ' + student.year 
    console.log(text)
}

const introduceSelf = (student: Person) => {
    let text = 
        "Hello! I am " + student.name + " and my favourite letiable is " + student.favouriteletiable
    console.log(text)
} 

printNameAndYear(bob)
introduceSelf(bob)
printNameAndYear(steve)
introduceSelf(steve)
printNameAndYear(mary)
introduceSelf(mary)

// use short_circuit
// rmb to replace all `var`

let a = 1
let b = 'bee'
let c = [3, 4, 5]

// if (a === 1) {
//   console.log('a is one')
// }
// if (b.length > 0) {
//   console.log('b is a non-empty string')
// }
// if (c.length === 3 && c[0] === 3) {
//   console.log('c is an array of length 3, and its first element is the number 3')
// }

//answer
console.log((a !== 1) || 'a is one')
console.log(b.length <= 0 || 'bee')
console.log((c.length != 3 && c[0] != 3) || 'c is an array of length 3, and its first element is the number 3')

// use ternary operator
const s = 'is a loooooooooong string'

//answer
console.log((s.length > 10) ? 's is a long string' : 's is a short string')

// if (s.length > 10) {
//   console.log('s is a long string')
// } else {
//   console.log('s is a short string')
// }

// use map() or reduce()
let numbers = [1, 2, 3, 4, 5]

//answer
let newNumbers = numbers.map((index, num) => num + index)
let product = numbers.reduce((num1, num2) => num1 * num2 )


// for (let i = 0; i < numbers.length; i++) {
//   newNumbers[i] = numbers[i] + i
// }
console.log('newNumbers:', newNumbers)

// let product = 1
// for (let i = 0; i < numbers.length; i++) {
//   product *= numbers[i]
// }
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
  ...bla,
  c: 3,
  d: 4,
  f: 101,
}

console.log('newBla', newBla)
