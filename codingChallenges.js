// import fetch from "node-fetch";

var module = module || {};
console.log("yummy")
// A place where I can practice/brainstorm through my coding challenges.
// Purpose: to demonstrate my thought process, and how I logic my reasoning.

// Finds the highest digit, when number is passed in as an input.
export function findsHighestDigit(number) {
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

export function sortArrayByLength(arr) {
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

export function calculateDifference(obj, limit) {
	
	const total = 0
	
	let extract = Object.values(obj)
	
	let add = extract.reduce((previousVal, currentValue) => previousVal + currentValue, total)
	
	return Math.abs(add) - limit

}

// ---------------------------------------------------------------------------

export function sumOfCubes(nums) {
	let collect = []
	
	for (let i = 0; i < nums.length; i++) {
		let cubed = Math.pow(nums[i], 3)
		collect.push(cubed)
	}
	const final = collect.reduce((prev, curr) => prev + curr, 0)
	return final
}

// ---------------------------------------------------------------------------
//Number() method converts string to number
export function yummyPi(n) {
	let shiftDecimalPlaces = Math.PI.toFixed(n); // 

	return Number(shiftDecimalPlaces);
}

// ---------------------------------------------------------------------------
//Two Sum 
//Brute Force Method:
// O(N^2) => O(N) = Time Complexity
// O(1) => "Constant" = Space Complexity
export function twoSum(array, targetSum) {
	for ( let i = 0; i < array.length; i++){
		const firstValue = array[i];
		for (let j = i + 1; j < array.length; j++){
			const secondValue = array[j];
			 if (firstValue + secondValue === targetSum){
				  return [firstValue, secondValue];
			 }
		}
	}
}

// Optimized/Refactored: 
// O(N) = Time Complexity 
// 0(1) = Space Complexity 
export function twoNumberSumOptimized(array, targetSum) {
	// sorts all elements in the array in ascending order (small to large)
	const sorted = array.sort((a, b) => {return a-b})	
	// define our left and right pointers
	// define default state if no pairs are found at all = to empty array
	let leftPointer = 0
	let rightPointer = sorted.length - 1
	let pairTwins = []
	let pairSum;
		// initilize our loop with a first condition
		// break out of loop with left and right pointer === targetSum
		// otherwise increment leftPointer if !=== targetSum 
		// otherwise decrement rightPionter if !==targetSum
		// return final state
		while (leftPointer !== rightPointer) {
			pairSum = sorted[leftPointer] + sorted[rightPointer]
				if (pairSum === targetSum) {
					pairTwins = [sorted[leftPointer], sorted[rightPointer]]
					break;
				} else if (pairSum < targetSum) {
					leftPointer++
				} else if (pairSum > targetSum) {
					rightPointer--
				}
		}
		return pairTwins
	}


export function countBits(n) {
	// we collect all elements from the loop inside of array, because the method Ill be using further down, work on array data types.
	// so instead of collecting all digits as numerial data type, we put it inside an array
	let total = []

	let bits = 0;
	// convert our number to Binary using toString() method, 2 represents the binary system that well converting into.
	// pass 2 as parameter
	let transform = n.toString(2);
	
	// loop through each element and put into collector
	for(let n = 0; n < transform.length; n++) {
		total += transform[n];  
	}
	// in order to traverse each bit, split() method converts each digit into a single string
	// filter each string with exact match of a '1' bit
	return total.split('').filter(x => x === '1').length
}

// ---------------------------------------------------------------------------

export function compareTriplets(a, b) {
	// we'll be keeping track of two states; points for Ally, and points for Brad
	let bTotal = 0
	let aTotal = 0
	let pointsArray = []
	// our points will be represented in an array data type
   
	// traversing the beginning of both our arrays, and compares each element; Ally and Brad
	for(let i = 0, j = 0; i < a.length; i++, j++) {
		aTotal += a[i] > b[j]
		bTotal += a[i] < b[j]
		pointsArray = [aTotal, bTotal]
	}
	// assign variables (Ally and Brad), to the pointsArray.
	//return the final data
	return pointsArray
   }

export function plusMinus(arr) {
	//count the amt of positive / zero / negative digits
	// set state to 0
	var dividend = arr.length
	var positive = 0 
	var zero = 0 
	var negative = 0 
	var finalRatio;
	var finalRatioDec = null
	
 for(let i = 0; i < arr.length; i++) {
	 if (arr[i] > 0) {
		 positive++
	 } else if (arr[i] === 0) {
		 zero++
	 } else if (arr[i] < 0) {
		 negative++
	 }
	 finalRatio = [positive, zero, negative]
	 finalRatio = finalRatio.map(x => x / dividend)
	 finalRatioDec = finalRatio.map(x => Number(x.toFixed(6)))
 	}
	 return finalRatioDec
	//console.log(finalRatioDec[0])
	//console.log(finalRatioDec[1])
	//console.log(finalRatioDec[2])
}

// output: [0.5, 0.166667, 0.333333]

// ---------------------------------------------------------------------------

export function integerBoolean(n) {
	let truthyFalsy = [];
	// splits string inside of array into invididual strings
	let singledDigits = n.split('')
	// loops through each index, and checks if the element is equal to 1 --> return boolean of 'true'
	for(let i = 0; i < singledDigits.length; i++) {
		if (singledDigits[i] === '1') {
			truthyFalsy.push(true)
		} else if (singledDigits[i] !== '1') {
			truthyFalsy.push(false)
			// returns us 'false' if element is not equal to '1'
		} else {
			// else set the default state to an empty array
			return []
		}
	}
		// invoke the variable of all truthy/falsy values
	return truthyFalsy
}

// ---------------------------------------------------------------------------

export function convertRomanNum(roman){
	let total = [];

	let finalTotal = 0;
	
	let splitting = roman.split('')
	
	const dictionary = {
		'I': 1,
		'IV': 4,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
		for (var key in dictionary) {
			for(let i = 0; i < splitting.length; i++) {
				if(key === splitting[i]) {
					finalTotal += dictionary[key];
				} else if (splitting[i] === 'I' && splitting[i] === 'V' ) {
				 	total += splitting.map(x => x.join(' '))
				}
			}
			total.push(key)
		}
	return finalTotal


}

// ---------------------------------------------------------------------------

export function perimeter(l, num){
	// two variables 
	// conditional operator 
	// or use if/else statements for readability 
		
		let square = 4 * num;
		let circle = 6.28 * num;
	
		if (l === 's') {
			return square 
		} else if (l === 'c') {
			return circle 
		}
	}


// 	Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

export function DNA_generation(x, y) {
	//psudeocode
	// x && y; where... 
	// x === number
	//  y === 'm' || 'f' where m = male / f = female
	// if === 0 then return a string 'me!'
	//female = positive
	//male = negative
	// we want to store multiple values for each key
	// create object of arrays to store unique values
	
	const obj = {
		"-3": {m: "great grandfather", f: "great grandmother",},
		"-2": {m: "grandfather", f: "grandmother",},
		"-1": {m: "father", f: "mother",},
		0: {m: "me!", f: "me!",},
		1: {m: "son", f: "daughter",},
		2: {m: "grandson", f: "granddaughter",},
		3: {m: "great grandson", f: "great granddaughter",},
	  };
	
	  return obj[x][y];
	}

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


export function arrayOfMultiples (num, length) {
	// each single calculated element from transformer variable, is collected in finalArr
	let finalArr = [];
	// holding nest/variable per each calculation (base num * index)
	let transformer = 0
	// start at index 1, plus an additional index. 
	// we start at 1, so base number is not mutiplied by index 0. We want 0 omitted from final array output
	for(let i = 1; i < length + 1; i++) {
		// multiply the base num by the index
		// ie. 3(num) * 1(i) //  3(num) * 2(i) // 3(num) * 3(i)
		transformer = num * i
		// push each calculated value, into final empty array
		finalArr.push(transformer)
	}
	return finalArr;
}

	// Create a function that takes an object and returns the keys and values as separate arrays.
	// Return the keys sorted alphabetically, and their corresponding values in the same order.
export function objectToArray(obj) {
	// create 2 variables 1 to hold keys, 1 to hold values (thank you Github AI copilot)
	let keys = Object.keys(obj)
	let values = Object.values(obj)
		return [keys, values]

}
console.log("transforms single object to arrays = ",objectToArray({ favRestaurant: 'fogo de chao', occupation: 'software engineer', range: 'fullstack development', gene: 'mutation', type: 'telepathy/telekensis', galaxy: 'supernova', energy: 'expansion' }))

//A repdigit is a positive number composed out of the same digit. 
//Create a function that takes an integer and returns whether it's a repdigit or not.
export function isRepdigit(num) {
	const first = num % 2 === 0
	const stringifyNum = num.toString().split('')
	// console.log(stringifyNum)

	const total = []

	for (let i = 0; i < stringifyNum.length; i++) {
			// console.log("stringfyNum[i] =", stringifyNum[i])
			total.push(stringifyNum[i])
			console.log("total =",total)
	}

	for (let j = 0; j < total.length; j++) {
		if(total[j] !== total[0]) {
			return false
		}
	}
	return true 
}
console.log("is this a RepDigit...? 1 = ",isRepdigit(1))
console.log("is this a RepDigit...? 9 = ",isRepdigit(9))
console.log("is this a RepDigit...? 123 = ",isRepdigit(123))
console.log("is this a RepDigit...? 7777777 = ",isRepdigit(7777777))
console.log("is this a RepDigit...111573411 = ",isRepdigit(111573411))
console.log("is this a RepDigit...? 2222222222222 = ",isRepdigit(2222222222222))


// Create a function that counts the integer's number of digits.
export function count() {
	let convertNegInt = Math.abs(n)
	return convertNegInt > 1 ? Math.ceil(Math.log10(convertNegInt)) : 1
}

// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
// The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	getArea(){
		return Math.PI * Math.pow(this.radius, 2)
	}
	getPerim(){
		return 2 * Math.PI * this.radius
	}
}

// removes all falsey values within an array 
function compact(arr) {
	return arr.filter(Boolean)
}

// Given a grid of numbers, return a grid of the Spotlight Sum of each number. 
// The spotlight sum can be defined as the total of all numbers immediately surrounding the number on the grid, including the number in the total.
// function spotlightMap(grid) {
	
// }

// Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
	let calc = arr.sort(function(a, b){
		return a-b
	})
	return calc[calc.length - 2]
}

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
function sevenBoom(arr) {
	const stringify = arr.join('')
	const regex = /7/g
	const final = stringify.match(regex)
	console.log(final)
	return final ? 'Boom!' : 'there is no 7 in the array'
}

//Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:
// constructor(x, y, width, height)

class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	toString() {
		const {x, y, width, height} = this;
		return `[x=${x}, y=${y}, width=${width}, height=${height}]`;
	}
}

/*Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. 
Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
*/

export function changeEnough(change, amountDue) {
	const initialValue = 0;
	const quarter = .25 * change[0]
	const dime = .10 * change[1]
	const nickel = .05 * change[2]
	const penny = .01 * change[3]
	
	var change = [quarter, dime, nickel, penny]
	
	const loopAdd = change.reduce((prevNum, currNum) => prevNum + currNum, initialValue);
	
	return loopAdd >= amountDue ? true : false
}

console.log("change enough? [8, 10, 50, 100], 5.00] = ", changeEnough([8, 10, 50, 100], 5.00))
console.log("change enough? [8, 10, 50, 100], 55.00] = ", changeEnough([8, 10, 50, 100], 55.00))

// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

function intWithinBounds(n, lower, upper) {
	if( n >= lower && n < upper && Number.isInteger(n)) {
		return true
	} else if (n !== Number.isInteger(n)) {
			return false	
	}
}

console.log("is wthin bounds 7, 1, 22 = ", intWithinBounds(7, 1, 22))

/*You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".
*/

// the index started at 0, and the tests expected the index to start at 1 -- which is why +1 is added within template literal
function findNemo(sentence) {
	const selectNemo = sentence.split(" ")
	const indexNemo = selectNemo.indexOf("Nemo")
 
	return selectNemo.includes("Nemo") ? `I found Nemo at ${indexNemo + 1}!` : "I can\'t find Nemo :("

}

//algorithms i've solved/played with over Thankgiving holiday :))) - 11.25.2022

// An array is special if every even index contains an even number and every odd index contains an odd number. 
// Create a function that returns true if an array is special, and false otherwise.
export function isSpecialArray(arr) {
	//begins @ index 0, then iterates on every even number (i.e next # 2)
	for(let a = 0; a < arr.length; a += 2){
		if(arr[a] % 2 != 0){
			// if the value of the even index does not have a remainder of 0 (making it an odd number - return false)
			return false
		}
	}
	//beings @ index 1, then iterates on every odd number (i.e next # is 3)
	for (let b = 1; b < arr.length; b += 2){
		if(arr[b] % 2 == 0){
			// if the value of the odd index is evenly divisible by 2 with a remainder of 0 (making it an even number @ the odd index) - return false  
			return false
		}
	}
		// even both conditions above have not been met, this is a "true" special array
		return true
}

console.log("[2, 3, 4, 9, 6, 11] = ",isSpecialArray([2, 3, 4, 9, 6, 11]))
console.log("[22, 3, 4, 7, 2, 44] = ",isSpecialArray([22, 3, 4, 7, 2, 44]))

//Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
export function matchLastItem(arr) {
	// removes last element of the array
	const last = arr.pop()
	// consolodates all elements into a single string
	const concat = arr.join('')
	// apply ternary operator if two strings match
	return concat === last ? true : false
}

console.log('"hope", "you", "are", "having", "a", "fine","lovely", "evening", "hopeyouarehavingafinelovelyevening"] =',matchLastItem(["hope", "you", "are", "having", "a", "fine", "lovely", "evening", "hopeyouarehavingafinelovelyevening"]))

// Create a function that moves all capital letters to the front of a word.
// *playing more with Regex -- its... actually pretty fun .... :)
export function capToFront(s) {
	// matches all global instance of Capital letters
	const regexMatch = /[A-Z]/g
	const collectCap = s.match(regexMatch).join('')
	// matches all global instance of lower case letters
	const regexSlice = /[a-z]/g
	const slicedArr = s.match(regexSlice).join('')
	// concatenate both regex variables
	return collectCap + slicedArr 
}

console.log(capToFront("HEy my naMe iS AUsTI, Decode tHIS"))

export function spinWords(string) {

	const dicing =  string.split(' ')
  

	for (let i = 0; i < dicing.length; i++) {
		// added two conditionals
		if (dicing[i].length >= 5 && dicing[i] !== 'metaverse!' && dicing[i] !== 'austi')
		dicing[i] = dicing[i].split('').reverse().join('');
	}
		return dicing.join(' ')
	}



console.log('spinWord 1 =',spinWords("hello"))
//should only spin the word "found", and omit metaverse + austi
console.log('spinWord 2 = ', spinWords("you found me in the metaverse! i'm austi"))



export 	function reverseWords(string) {
	const splicing = string.split(' ')
	const joins = splicing.reverse()
	return joins.join(' ')
}
// Currying functions:
// how its useful --> 
/*function multiply {

}*/