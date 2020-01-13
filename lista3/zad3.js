Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let index = 0; index < this.length; index++){
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
}

Array.prototype.myFilter = function(callback){
    let filteredArray = [];
    for(let index = 0; index < this.length; index++){
        if(callback(this[index], index, this)){
            filteredArray.push(this[index]);
        }
    }
    return filteredArray;
}

Array.prototype.myForEach = function(callback){
    for(let index = 0; index < this.length; index++){
        this[index] = callback(this[index], index, this);
    }
    return this;
}

function even(x){
    return x%2 == 0;
}

let arr = [1,2,3];
let newArr = arr.myMap(x => x+1);
console.log(newArr);
let filteredArr = arr.myFilter(_ => _%2 == 1);
console.log(filteredArr);
let newFilteredArr = arr.myFilter(even);
console.log(newFilteredArr);
arr.myForEach(x => x+1);
console.log(arr);