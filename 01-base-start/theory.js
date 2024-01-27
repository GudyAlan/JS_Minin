// =========== Operators ===========
let a = 10;
let b = 5;
let c = 32;

// c = c + a;   c += a;
// c = c - a;   c -= a;
// c = c / a;   c /= a;
// c = c * a;   c *= a;

// c = 4 ** 2;

// ============ Data Types ===========
const age = 29; // number
const name = "John"; // string
const isProgrammer = true; // boolean
let x // undefined

console.log(typeof age);
console.log(typeof name);
console.log(typeof isProgrammer);
console.log(typeof x);
// null
console.log(typeof null); // object - но это не так, это "косяк" JS, который нужно учитывать

// ========= Priority ===========
const fullAge = 42;
const birthYear = 1981;
const currentYear = 2023;
// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

const num1 = 42;
const num2 = '42';
console.log(num1 == num2); // true
console.log(num1 === num2); // false

console.log(1 == "1") // возвращает true (так как Оператор равенства (==) используется для сравнения значений b будет выполнять приведение типов, если сравниваемые переменные имеют разные типы)
console.log(1 != "1") // возвращает false
console.log(1 === "1") // возвращает false (Оператор строгого равенства (===) используется в JavaScript для сравнения значений и типов двух переменных. В отличие от оператора равенства, этот оператор не выполняет приведение типов)
console.log(1 !== "1") // возвращает true


