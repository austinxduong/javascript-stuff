console.log('stack_algo file generated')

// LIFO (Last in, First out): like dishes at buffet


export default class Stack {
    // creates an internal empty array called "items"
    constructor(){
        this.items = [];
    }

    // method for adding an "item", to the items array
    push(item){
        this.items.push(item);
    }

    // removes last item of the items array, and returns just that item
    pop(){
        return this.items.pop();
    }

    // simply prints the last item of the array
    peek(){
        if (this.items.length == 0) {
            return "this array has 0 items within the Stack"
        }
        return this.items[this.items.length -1]
    }

    // prints the how many items are in the items array
    getSize() {
        return this.items.length;
    }
        
    isEmpty(){
        return this.getSize() === 0;
    }
}

// create new instance, "instantiate", a items class named cars
const cars = new Stack();

cars.push("Honda");
cars.push("Toyota")
cars.push("Mazda")

console.log(cars.pop())


console.log(cars)
console.log(cars.peek())
console.log(cars.getSize())
