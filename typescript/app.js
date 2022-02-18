var starter = 'Hello world';
console.log(starter);
//BasicTypes: https://codesandbox.io/s/mz7m369m68?file=/src/Exercise_1_Basic_Types/exercise1.ts:1273-1748
//ex 1;
// ======== Exercise 1.1 ========
// Instructions:
// • Hover over red squigglies to inspect the TS errors.
// • Hover over variables to inspect their types.
// • Fix the error on line 18 by changing the value of pi to the expected type.
var pi = 3.14159;
var tau = pi * 2;
console.log('[Exercise 1.1]', "".concat(tau, " is ").concat(pi, " times two."));
//ex2
// Instructions:
// • Inspect type of `pie`
// • Add an explicit type annotation to `pie`
// • Try assigning invalid types, for fun
var pie;
pie = 'blueberry';
console.log('[Exercise 1.2]', "I like to eat ".concat(pie, "-flavored pie."));
//ex3
// ======== Exercise 1.3 ========
// Instructions:
// • Inspect the error, then fix it.
var isMark = true;
console.log('[Exercise 1.3]', "".concat(isMark ? 'Oh, hi Mark' : 'Who are you?'));
//ex 4
// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)
var integer = 6;
var float = 6.66;
var hex = 0xf00d;
var binary = 666;
var octal = 484;
var negZero = -0;
var actuallyNumber = NaN;
var largestNumber = Number.MAX_VALUE;
var mostBiglyNumber = Infinity;
var members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log('[Exercise 1.4]', members);
// ex5
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)
var sequence = Array.from(Array(10).keys());
var animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
var stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
var allMyArrays = [sequence, animals, stringsAndNumbers];
console.log('Solution 1.5', allMyArrays);
//ex 6
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)
var inventoryItem = ['fidget wibbit', 11];
// later we destructure it
var names = inventoryItem[0], qty = inventoryItem[1];
var msg = addInventory(names, qty);
console.log('[Exercise 1.6]', msg);
function addInventory(names, quantity) {
    return "Added ".concat(quantity, " ").concat(names, "s to inventory.");
}
