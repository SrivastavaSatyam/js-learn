let score = "33dbj"

console.log(typeof score);
console.log(typeof(score));

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);  //Getting NaN(Not a Number) as it tries to convert to number but passed value is string

// "33"=>33
//  "33asvb" =>NaN
//  true => 1
//  false > 0

let isLoggedIn = "gbhbjh"

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

//  1 => true; 0 => false 
//  "" => false
//  "dvfghg" => true

let number = 25

let stringNumber = String(number)
console.log(stringNumber);

let inrementNumber = 100 
console.log(inrementNumber++)