//fail https://stackoverflow.com/questions/17014770/why-and-how-does-evaluate-to-the-letter-i
console.log( (![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]] )
//f
console.log((![]+[])[+[]])
//a
console.log((![]+[])[+!+[]])
//i
console.log(([![]]+[][[]])[+!+[]+[+[]]])  
//l
console.log((![]+[])[!+[]+!+[]])

/* The INSTANCEOF operator tests whether the prototype property
of a constructor appears anywhere in the prototype chain of an object.

The TYPEOF operator returns a string indicating the type of the
unevaluated operand. */

let myFun = () => 5+2
const car = {  
    make: 'Honda',  
    model: 'Accord',  
    year: 2020  
}
console.log(typeof(myFun))
console.log(typeof(car))
console.log(myFun instanceof Object)
console.log(myFun instanceof Function)