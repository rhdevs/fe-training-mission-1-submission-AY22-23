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
type Student = {
  name: string
  year: number
  friends: String[]
  favouriteVariable: string | number
}

const bob : Student = {
  name: 'Bob',
  year: 2,
  friends: ['Steve'],
  favouriteVariable: 23,
}

const steve : Student = {
  name: 'Steve',
  year: 1,
  friends: ['Bob', 'Mary'],
  favouriteVariable: 'hello', // note that this shall ONLY be string or number
}

const mary : Student = {
  name: 'Mary',
  year: 1,
  friends: ['Steve'],
  favouriteVariable: 100,
}

const students: Student[] = [bob, steve, mary] // assign an appropriate type to `students`

// convert to anonymous function
// use string literals
// add appropriate type declarations to function args
const print_name_and_year = (student: Student) => {
  let text = `${student.name} is year ${student.year}`
  console.log(text)
}

const introduce_self = (student: Student) => {
  let text =
    `Hello! I am ${student.name} and my favourite variable is ${student.favouriteVariable}`
  console.log(text)
}
print_name_and_year(bob)
introduce_self(bob)
print_name_and_year(steve)
introduce_self(steve)
print_name_and_year(mary)
introduce_self(mary)

// use short_circuit
// rmb to replace all `var`

let a = 1
let b = 'bee'
const c = [3, 4, 5]

a === 1 && console.log('a is one')

b.length > 0 && console.log('b is a non-empty string')

c.length === 3 && c[0] === 3 && console.log('c is an array of length 3, and its first element is the number 3')

// use ternary operator
const s = 'is a loooooooooong string'
s.length > 10 ? console.log('s is a long string') : console.log('s is a short string')

// use map() or reduce()
const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.map((index, num) => num + index)

console.log('newNumbers:', newNumbers)

const product = numbers.reduce((val1, val2) => val1 * val2)
console.log('product:', product)

// use spread operator to mutate object instead
const bla = {
  a: 12,
  b: 23,
  c: 54,
  d: 245,
  e: 34,
  f: 56,
}

const updateBla = {
  c: 3,
  d: 4,
  f: 101,
}

console.log({...bla, ...updateBla})