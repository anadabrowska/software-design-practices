let one = require('./zad4.1');

function fnTwo(n) { if ( n > 0 ) {
console.log( `two: ${n}`);
one.fnOne(n-1); }
}

module.exports = { fnTwo };