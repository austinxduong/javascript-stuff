
const { findsHighestDigit, sortArrayByLength, calculateDifference, sumOfCubes, yummyPi, twoSum } = require('../codingChallenges')
// const { fetchQuotes } = require( '../../fetchApi')



describe('Test validity for functions', () => {
    test('finds the highest digit, when integer is passed in as input', () => {
        expect(findsHighestDigit(876329)).toEqual(9);
    })


    test('Sort Array of Strings by its length', () => {
        expect(sortArrayByLength(
            ['i/m', 'super','hungry', 'what', 'should', 'i', 'eat' ]
        )).toEqual(
            ["i", "i/m", "eat", "what", "super", "hungry", "should"]
        )
    })


    test('Finds difference of all values of an Object as first param, from an integer of the second param', () => {
        expect(calculateDifference({one: 11, two: 1}, 3)).toEqual(9)
        expect(calculateDifference({zero:0}, 2)).toEqual(-2)
    })

    test('Iterates through array, and returns cube sum of all elements', () => {
        expect(sumOfCubes([3, 2, 12])).toEqual(1763)
    })

    test('PI to N decimal places', () => {
        expect(yummyPi(1)).toEqual(3.1)
        expect(yummyPi(2)).toEqual(3.14)
        expect(yummyPi(3)).toEqual(3.142)
        expect(yummyPi(4)).toEqual(3.1416)
    })

    //Brute Force Method:
    // O(N^2) => O(N) = Time Complexity
    // O(1) => "Constant" = Space Complexity
    test('Finds two elements within Array, and their sum matches targetSum', () => {
        expect(twoSum([-1, 3, 5, 0, 9, 6, 4, 2], 7)).toEqual([3, 4])
        expect(twoSum([-9, -100, 50, 40, 3, 13, 5], 16)).toEqual([3, 13])
        expect(twoSum([-100, 4, -1111, 40, 2, 22, 4], 44)).toEqual([4, 40])
        expect(twoSum([2, 55, 3, 8, -11,], -9)).toEqual([2, -11])
    })

    //Optimized Method:

})

// describe('Test API fetch call', () => {
//     test('validates status code', async () => {

//         const apiCall = fetchQuotes().then(data => console.log(data))

//         expect(apiCall).toEqual()
//     })