

const MarvelHeros = ["thor","ironman"]
const dcHeros = ["flash","superman"]

// MarvelHeros.push(dcHeros)

// console.log(MarvelHeros.length);

const allheros = MarvelHeros.concat(dcHeros) // returns a new array ithout haging the original array 
// console.log(MarvelHeros);
console.log(allheros);


const allnewHeros = [...MarvelHeros,...dcHeros] //spread operator(..) spreads individual array elements

console.log(allnewHeros);

const anotherarray = [1,,4,[6,7,],8,9,[5,6,[8,9]]]

const realArray = anotherarray.flat(Infinity) // flat returns all sub array ele in a single array format //Infiginite refers to the depth of th array inside array.

console.log(realArray);

// check if array 
console.log(Array.isArray("hello"))
console.log(Array.from("4597")) //onverts to array

// this returns [] if array cannot be converted 
console.log(Array.from({name:"hello"}))

let score1=  100
let score2=  200
let score3=  300
console.log(Array.of(score1,score2,score3)); //returns new array from set of elements
