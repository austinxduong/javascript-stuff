console.log("set collection data structure file has been generated")
//  ES5 syntax

function mySet() {
    var collection = []

    // this method return true or false, if the element is not at -1 index (meaning it doesnt exist). returns true if not -1.
    this.has = function(element) {
        return (collection.indexOf(element) !== -1)
    }

    // returns all values within the set collection
    this.values = function(){
        return collection;
    }

    // this method adds element to the set collection
    this.add = function(element){
        if(!this.has(element)) {
            collection.push(element)
            return true;
        }
        return false;
    }

    // this method removes an element from the set collection
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1)
            return true;
        }
        return false; // returns false, if the element does not exist in the set collection
    }
    // this method returns the amount of element within the set collection
    this.size = function(){
        return collection.length;
    }

    // this method will add elements from first set, and second set, to the union set collection
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(function(e) {
            unionSet.add(e)
        });
        secondSet.forEach(function(e){
            unionSet.add(e)
        });
        return unionSet;
    }

    // this method returns the intersection of both sets, if elements in both first set collection, and the other set collection are present. that elmement is added to the set collection.
    this.intersection = function(otherSet){
        var intersection = new mySet();
        var firstSet = this.values();

        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersection.add(e)
            }
        })

        return intersection;
    }

    // returns the difference of elements from both sets, and is added to the difference set

    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();

        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })

        return differenceSet;
    }

    this.subset = function(otherset){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherset.has(value)
        });
    };

}

var firstSet = new mySet();
var secondSet = new mySet();

firstSet.add("a");
secondSet.add("b");
secondSet.add("c");
secondSet.add("a");
secondSet.add("d")

console.log(firstSet.subset(secondSet));
console.log(firstSet.intersection(secondSet).values())

var cSet = new Set();
var dSet = new Set();

cSet.add("a");
dSet.add("b");
dSet.add("c");
dSet.add("a");
dSet.add("d");
console.log(dSet.values())
dSet.delete("a");
console.log(dSet.has("a"));
console.log(dSet.add("d"));