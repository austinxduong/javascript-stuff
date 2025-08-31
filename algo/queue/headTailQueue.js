console.log("headtailQueue file has been generated")

// FIFO, like customers shopping

class Queue {
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    // add element to the back of storage
    enqueue(element){
        this.storage[this.tail] = element
        this.tail ++
    }

    // remove element from front 
    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        console.log("first element removed from storage -->",removed)
        return removed
    }
}

const queue = new Queue()

// add three element to storage, and increment tail === 3
queue.enqueue("seahorse")
queue.enqueue("dolphin")
queue.enqueue("whale shark")

queue.dequeue()
queue.dequeue()

console.log(queue)