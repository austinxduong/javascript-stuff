var module = module || {};
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

// -------------------------------------------------------------------------

function sortArrayByLength(arr) {
	let sunday = []
	
	for(let i = 0; i < arr.length; i++) {
		sunday.push(arr[i])
	}
	return sunday.sort((a, b) => {
		return a.length-b.length
	})
}
// Test case(s)
console.log(sortArrayByLength(['hello', 'austi', 'im', '!'])) // [ '!', 'im', 'hello', 'austi' ]

// ---------------------------------------------------------------------------

function calculateDifference(obj, limit) {
	
	const total = 0
	
	let extract = Object.values(obj)
	
	let add = extract.reduce((previousVal, currentValue) => previousVal + currentValue, total)
	
	return Math.abs(add) - limit

}

function sumOfCubes(nums) {
	let collect = []
	
	for (let i = 0; i < nums.length; i++) {
		let cubed = Math.pow(nums[i], 3)
		collect.push(cubed)
	}
	const final = collect.reduce((prev, curr) => prev + curr, 0)
	return final
}

function yummyPi(n) {
	let shiftDecimalPlaces = Math.PI.toFixed(n); // 

	return Number(shiftDecimalPlaces);
}

//Number() method converts string to number
// ---------------------------------------------------------------------------

module.exports = { findsHighestDigit, sortArrayByLength, calculateDifference, sumOfCubes, yummyPi }

