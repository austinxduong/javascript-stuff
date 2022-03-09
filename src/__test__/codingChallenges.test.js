const { findsHighestDigit, sortArrayByLength, calculateDifference, sumOfCubes } = require('../../codingChallenges')
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

})

// describe('Test API fetch call', () => {
//     test('validates status code', () => {

//         expect().toEqual()
//     })
// })