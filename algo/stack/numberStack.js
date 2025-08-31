console.log("number_stack file is generated")

// LIFO (Last in, First out): like dishes at buffet

class Stack {
    constructor(){
        this.items = []
        this.index = 0
    }

    // Adds element to the Stack
    push(element){
        this.items[this.index] = element
        console.log(`${element} added to ${this.index}`)
        this.index += 1
        return this.count - 1
    }

    // Remove and return top element in stack (last element added to end of stack array)
    pop(){
        if (this.index == 0) return undefined
        let deleteItem = this.items[this.index - 1]
        this.index -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
        
    }

    // Check top element in stack (last element added to end of stack array)
    peek(){
        console.log(`Top element is ${this.items[this.index - 1]}`)
        return this.items[this.index - 1]
    }

    // Check if the stack is empty

    isEmpty(){
        console.log(this.index == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size(){
        console.log(`${this.index} in stack`)
        return this.index
    }

    // Print elements in stack
    print(){
        let str = ''
        for (let i = 0; i < this.index; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    clear(){
        this.items = []
        this.index = 0
        console.log('Stack is cleared')
        return this.items
    }

}

// instantiate new object, from class
const stack = new Stack()


stack.push(100)
stack.push(200)
stack.push(300)

// stack.pop()
// stack.pop()
// stack.pop()

console.log(stack.print())
stack.peek()
stack.isEmpty()
stack.size()
stack.clear()