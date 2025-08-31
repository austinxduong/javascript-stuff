console.log("queue.js file has been generated")

/// FIFO, like customers shopping

export default class Queue {
    constructor(){
        this.items = [];
    }

    // add item to a queue (items array)
    enqueue(item){
        this.items.push(item);
    }

    // takes first item of queue (array), and returns that item
    dequeue(item){
        return this.items.shift(item)
    }

    // displays/renders the first item of the queue (array), but does not alter/mutate the array
    peek(){
        return this.items[0]
    }

    // displays/renders the number of elements in queue (array)
    getSize(){
        return this.items.length;
    }

    // return true/false if there is 0 elements in queue (array)
    isEmpty(){
        return this.getSize() === 0;
    }
}


const carsQueue = new Queue();

carsQueue.enqueue("Honda")
carsQueue.enqueue("Toyota")
carsQueue.enqueue("Mazda")

console.log(carsQueue.dequeue())

console.log(carsQueue)
