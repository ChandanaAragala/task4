let n1 = 123;
let str = n1.toString();
console.log(str); // "123"
console.log(typeof str); // "string"
let n2 = 12.34567;
let fixedNum = n2.toFixed(2); 
console.log(fixedNum); // "12.35" (rounded)
let n3 = 12.34567;
let precisionNum = n3.toPrecision(4);
console.log(precisionNum); // "12.35"
let n4 = 12345;
let expNum = n4.toExponential(2);
console.log(expNum); // "1.23e+4"
let intNum = parseInt("123.45");
console.log(intNum); // 123

let binaryNum = parseInt("1101", 2);
console.log(binaryNum); // 13 (binary to decimal)
let floatNum = parseFloat("123.45abc");
console.log(floatNum); // 123.45
console.log(isNaN(123)); // false
console.log(isNaN("abc")); // true
console.log(isNaN(NaN)); // true
console.log(isFinite(123)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
