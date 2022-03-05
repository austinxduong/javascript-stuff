console.log("yummy")
// A place where I can practice/brainstorm through my coding challenges.
// Purpose: to demonstrate my thought process, and how I logic my reasoning.

// Finds the highest digit, when number is passed in as an input.
function highestDigit(number) {
	
	var stringy = number.toString()
	var slicing = stringy.split('')
	var highest = Math.max(slicing)
	console.log(slicing)
	return highest;
}

console.log(highestDigit(345))