module.exports = { fnOne };
let two = require('./zad4.2');
 
function fnOne(n) {
    if ( n > 0 ) {
        console.log( `one: ${n}`); two.fnTwo(n-1);
    }
}
