const myArr = [0,1,5,4,3,6,4]

const newArray = new Array(1,2,4,6,7,5)

// console.log(myArr)
// console.log(newArray);

newArray.push("Helo")
// Add at last 
// console.log(newArray.push("Helo")); //return length of array

// console.log(newArray)

newArray.unshift("helloShift")
// Add at start
console.log(newArray)

// Removes from last 
myArr.pop()
// console.log(myArr)

myArr.shift() //returns the array 
console.log(myArr)


// check if element exists 
console.log(myArr.includes('helo')) 

// array to string 
const arrayToString = myArr.join()
console.log(arrayToString) // converted to string 
console.log(typeof arrayToString)


// slice --> returns the section of array (but not change the original array)
console.log("A ",myArr)

const myArr1 = myArr.slice(0,5)
console.log(myArr1);

console.log("B ", myArr);

// Spilce --> returns the section of the array( changes the original array)

const myArr2 = myArr.splice(0,3)
console.log(myArr2)

console.log("C ", myArr)
