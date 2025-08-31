console.log("sliding window algo file has been generated")

// fixed sliding window [fixed # of integers in subarray]
// dynamically sliding window [subarray expands/shrinks]

// find the max subArray sum (i.e of size 3)
// subtract previous element, add next element

function maxSubArraySum(array, fixedsize){

    if (fixedsize < 0 || fixedsize > array.length) return null;
    let currSum = 0;
    let maxSumSeen = -Infinity;

    for (let i = 0; i < array.length; i++){ // iterates through array
        currSum += array[i]; // add the elements 
        if (i >= fixedsize - 1){ // 3 - 1 // i >= 2 // condition to iterate/add only to 3 index elements within array (creats subarray)
            maxSumSeen = Math.max(currSum, maxSumSeen) // returns the largest element of parameters
            currSum -= array[i - (fixedsize - 1)]; // i - 2 // 2 - 2 // // array[0] // 0th index // sliding window subtract previous element from the currSum variable
        }
    }

    return maxSumSeen;
}

const arr1 = [1, 2, 3, 5, 4, 8, 6, 2]

console.log(maxSubArraySum(arr1, 3))


function maxSubArraySumOther(array, window){
    if (window > array.length) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    // initialize window
    for (let i = 0; i < window; i++){ // window = 3 // starting from the 0th index, only iterate through the size of window 
        maxSum += array[i] // add those elements within the window size, to the maxSum variable
    }

    tempSum = maxSum;

    // slide the window over the array 
    for (let i = window; i < array.length; i++){
        tempSum = tempSum - array[i - window] + array[i]; // tempSum = 6 - array[3 - 3] + next element // tempSum = 6 - array[0] + 4 // tempSum = 6 - prevElement + nextElement
        maxSum = Math.max(maxSum, tempSum) // returns the max variable
    }
    return maxSum;

}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const window = 3;
console.log(maxSubArraySumOther(array, window))
