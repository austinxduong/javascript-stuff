console.log("bubble sort data structure file has been generated")

function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) { // i iterates through entire array, minus already locked in element (highest value) at the end of array
        for (let j = 0; j < arr.length - 1 - i; j++) { // j iterates the element adjacent, to element i, where j is 1 iteration behind i, also minus the locked in element (highest value at the second to last end of array)
            if(arr[j] > arr[j + 1]) {
            // these current elements === updated to these values
            /* ^^ */ [arr[j], arr[j+1]] = [arr[j+1], arr[j]] // refactored
                // const temp = array[j];
                // array[j] = array[j+1];
                // array[j+1] = temp
            }
        }
    }

    return arr;
}

// console.log(bubbleSort([1, 2, 4, 8, 123, 345, 43, 32, 63, 123, 43, 2, 55, 1, 234, 92, 5643]))

function bubbleSort_one(arr) {
    let swapped;
    do {
        swapped = false // default state of false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1])  {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true // after looping update swapped state
        }
      }
    } while (swapped)
}

const arr = [8, 20, -2, 4, 6]
bubbleSort_one(arr)
console.log(arr)