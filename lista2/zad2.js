const car = {  
    make: 'Honda',  
    model: 'Accord',  
    year: 2020  
}
const car2 = {  
    type: 'Mercedes',  
    price: '20 000$',  
    sold: false  
}

const obj = {
    //toString: () => "model", [object Oject]
}

console.log(car.make)
console.log(car["make"]) 
var first = 'm' 
console.log(car[first + 'ake'])
car[5] = true
console.log(car)
let newCar = {...car, ...car2}
console.log(newCar)
//console.log(car[obj])
car[obj] = 5;
console.log('\n') 


let pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni']
console.log(pizzaToppings['0'])
pizzaToppings.length = 5;
console.log(pizzaToppings)
pizzaToppings[3] = 'salami'
console.log(pizzaToppings)
pizzaToppings.length = 2
console.log(pizzaToppings + '\n')

console.log(pizzaToppings['cheese'])
pizzaToppings['cheese'] = 'double cheese'
console.log(pizzaToppings)
console.log(pizzaToppings['cheese'])