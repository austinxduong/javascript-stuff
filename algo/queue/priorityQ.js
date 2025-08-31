console.log("Priority Queue file has been generated")

//FIFO(First in, First Out)

class PriorityQueue {
    list = []
    capacity = null

    constructor(capacity){
        this.capacity = Math.max(Number(capacity), 0) || null;
    }

    get size() {
        return this.list.length;
    }

    get isEmpty() {
        return this.size === 0
    }

    get isFull() {
        return this.capacity !== null && this.size === this.capacity;
    }

    // 1. item parameter, and a priority parameter with a default value of 0.
    // 2. priority is stored in varible, with additional expression so that the priority is never below 0.
    // 3. element (container) is stored in a variable, with values of item, and its priority.
    // 4. first loop, checks a condition if the list is empty / or / if the priority of the element being added, is greater than or equal to the priority of the last item within the list.
            // 4.5. if conditions are met, the element (item), is added to the end of the list.
    // 5. else, we loop through each index within the list.
            // 5.5 and additionally verify the condition, if the priority of the element being added, is less than the priority of the current index being looped through.
                    // if condition is met, loop stops iterating at the current index, 0 elements are deleted, and the element is added in that empty space.
                    // loops ends, and the size of the loop is called.
    enqueue(item, priority = 0) {
        priority = Math.max(Number(priority), 0);
        const element = {item, priority};

        if(this.isEmpty || element.priority >= this.list[this.size - 1].priority) {
            this.list.push(element)
        } else {
            for (let index in this.list) {
                if(element.priority < this.list[index].priority) {
                    this.list.splice(index, 0, element)
                    break;
                }
            }
        }
        return this.size
    }

    dequeue(){
        return console.log("This item (container) has been removed -->", this.list.shift());
    }

    // looks at the first element, in the list. if there is an element in the list? return the item, else return value of null
    peek() {
        const element = this.list[0]
        return console.log("First element in the list:",element ? element.item : null)
    }

    print(){
        console.log(this.list)
    }

}



const priorityQ = new PriorityQueue()


priorityQ.enqueue(7)
priorityQ.enqueue(32, 3)
priorityQ.enqueue(20, 2)
priorityQ.enqueue(45, 3)
priorityQ.enqueue(77, 7)
priorityQ.enqueue(49, 10)
priorityQ.enqueue(100, 4)

priorityQ.peek()
console.log(priorityQ.dequeue())

priorityQ.print()