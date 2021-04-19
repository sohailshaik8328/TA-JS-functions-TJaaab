// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return
the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num){
  return num + 1
}

// - Write a Function Expression
let addOne = function(num){
  return num + 1
}

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (num) => num + 1

// - Write an Arrow Function with curly brackets
let addOne = (num) => {
  return num + 1
}

// - Execute the function
addOne(21)

// - Execute the function and store the return value in a variable.
let return_value = addOne(21)

// - What is the typeof returnValue
// typeof return_value is string

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(num){
  return num - 1
}

// - Write a Function Expression
let subtractOne = function(num){
  return num - 1
}

// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (num) => num - 1


// - Write an Arrow Function with curly brackets
let subtractOne = (num) => {
  return num + 1
}

// - Execute the function
subtractOne(23)

// - Execute the function and store the return value in a variable.
let return_subtract_value = subtractOne(23)


// - What is the typeof returnValue
// typeof return_subtract_value is string


/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB){
  return numA + numB
}

// - Write a Function Expression

let sum = function (numA, numB){
  return numA + numB
}

// - Write an Arrow Function without curly brackets(if possible)

let sum = (numA , numB) => numA + numB

// - Write an Arrow Function with curly brackets

let sum = (numA, numB) => {
  return numA + numB
}

// - Execute the function
sum(22, 33)

// - Execute the function and store the return value in a variable
let return_sum_value = sum(22, 33)

// - What is the typeof returnValue
// typeof return_sum_value is number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(square_num){
  return square_num * square_num
}

// - Write a Function Expression
let square = function(square_num){
  return square_num * square_num
}

// - Write an Arrow Function without curly brackets(if possible)
let square = (square_num) => square_num * square_num

// - Write an Arrow Function with curly brackets
let square = (square_num) => {
  return square_num * square_num
}

// - Execute the function
square(2)

// - Execute the function and store the return value in a variable
let square_return_value = square(2)

// - What is the typeof returnValue
// typeof square_return_value is number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y){
  if(x > y){
    return true
  }else {
   return false
  }
}

// - Write a Function Expression
let isGreater = function (x, y){
  if(x > y){
    return true
  }else {
   return false
  }
}

// - Write an Arrow Function without curly brackets(if possible)
// let isGreater = (x, y) => if (x > y ) :

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  if(x > y){
    return true
  }else{
    return false
  }
}

// - Execute the function
isGreater(22, 21)

// - Execute the function and store the return value in a variable
let greater_return_value = isGreater(22, 21) 

// - What is the typeof returnValue
// type of greater_return_value is boolean

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(odd_even_num){
  if(odd_even_num % 2 === 0){
    return `${odd_even_num} Number is even `
  }else{
    return `${odd_even_num} Number is odd`
  }
}

// - Write an anonymous Function Expression
let oddOrEven = function (odd_even_num){
  if(odd_even_num % 2 === 0){
    return `${odd_even_num} Number is even `
  }else{
    return `${odd_even_num} Number is odd`
  }
}

// - Write an named Function Expression
let oddOrEven = function oddOrEven(odd_even_num){
  if(odd_even_num % 2 === 0){
    return `${odd_even_num} Number is even `
  }else{
    return `${odd_even_num} Number is odd`
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (odd_even_num) => oddOrEven % 2 === 0 ? `Number is even` : `Number is odd`

// - Write an Arrow Function with curly brackets
let oddOrEven = (odd_even_num) => {
  if(odd_even_num % 2 === 0){
    return `${odd_even_num} Number is even `
  }else{
    return `${odd_even_num} Number is odd`
  }
}

// - Execute the function
oddOrEven(2)

// - Execute the function and store the return value in a variable
let return_odd_even_value = oddOrEven(2)

// - What is the typeof returnValue
// type of return_odd_even_value is string
