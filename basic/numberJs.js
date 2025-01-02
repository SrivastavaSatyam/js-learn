const balance = 100

const amount = new Number(100)
console.log(amount) //try on chrome console also 

console.log(amount.toString.length);
console.log(amount.toFixed(2)); // returns number upto 2 decimal places

const accontbalane = 1200.255

console.log(accontbalane.toPrecision(5)) // rounds the value then returns value in string datatype. 

const accontAmount = 1000000000
console.log(accontAmount.toLocaleString()); // returns value in locale type default us style 
console.log(accontAmount.toLocaleString("en-In")) // returns in indian style 


console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

