console.log("priorityQueue file has been generated")

// (First in, First out)

class priorityQueue {
    constructor() {
        this.storage = []
        this.count = 0
    }

   // [{element: 'A', priority: 5}, {element: 'B', priority: 4}]

    enqueue(element, priority){
        // this.storage.push(element)
        const bucket = { element, priority } 

        let added = false;

        for( let i = 0; i < this.storage.length; i++){
            // if the bucket we are adding, has priority with a number less than the current position in the loop, we shift the current bucket to the next index, and add that new bucket to the front
            if(bucket.priority < this.storage[i].priority){
                // splice method === (start, deleteCount, whatIsBeingPasted)
                // 0 == not deleting anything, so current index shift to the right, and new bucket is added to the 0 index
                this.storage.splice(i, 0, bucket)
                let added = true
                break;
            }
        } if(!added){
            this.storage.push(bucket)
        }
    }

    // removes/deletes first element of the storage
    dequeue(){
        if(!this.isEmpty){
            return this.storage.shift()
        } else {
            return null
        }
    }

    // renders/returns the first element of the storage
    peek(){
        if(!this.isEmpty()) {
            return this.storage[0]
        } else {
            null;
        }
        
    }

    isEmpty(){
        return this.storage.length == 0;
    }

    clear(){
        this.storage = []
    }

    printQueue(){
        let str = ''
        for(let i = 0; i < this.storage.length; i ++) {
            str += `{ element: ${this.storage[i].element}, priority: ${this.storage[i].priority} } ` 
        }
         return str
    }
    sizeOfQueue(){
        return this.storage.length
    }
}

const newQueue = new priorityQueue();

newQueue.enqueue('pizza', 2)
newQueue.enqueue('burger', 4)
newQueue.enqueue('icecream', 1)
newQueue.enqueue('fries', 3)

console.log(newQueue.printQueue())
