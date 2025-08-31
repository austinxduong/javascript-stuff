// LIFO (Last in, First out): like dishes at buffet

class Storage {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element){
        this.size ++
        this.storage[this.size] = element
    }

    // deletes the last element from the storage, and returns that element
    pop(){
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size --
        console.log("deleted element from the storage, pop method -->", removed)
        return removed
    }

    // checks the last element within storage, and returns that element
    peek(){
        console.log(this.storage[this.size])
        return this.storage[this.size]
    }
}

const stack = new Storage()

stack.push('dog')
stack.push('cat')
stack.push('bear')

stack.pop()

stack.peek()

console.log(stack)