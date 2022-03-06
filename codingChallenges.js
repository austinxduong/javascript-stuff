console.log("yummy")
// A place where I can practice/brainstorm through my coding challenges.
// Purpose: to demonstrate my thought process, and how I logic my reasoning.

// Finds the highest digit, when number is passed in as an input.
function findsHighestDigit(number) {
	const convert = number.toString()
	const slicing = convert.split('')
	const captureHighestInt = Math.max(...slicing)
	
    return captureHighestInt;
}
// Test Cases:
console.log(findsHighestDigit(121293)) // 9
console.log(findsHighestDigit(3002003)) // 3

var myArray = ['a', 'b', 'c', 'd'];

let add = myArray.unshift('addToFirst');
let remove = myArray.pop()
let gain = myArray.push('gainedLast')

console.log(myArray)
console.log(remove, myArray)
console.log(gain, myArray)

module.exports = { findsHighestDigit }
