
const name = "elo Orld "
const number = 50

console.log(name+number);

console.log(`Hello ${name} your count is ${number}`) //String Intercolation created using Placeholders

// String Declartion 

const gameName = new String("Contra")
console.log(gameName) // check on chrome console 

console.log(gameName[5])
console.log(gameName.length);


// sub string

const newString = gameName.substring(0,4) //last value is not passed 
console.log(newString)
// Slice String

const anotherString = gameName.slice(-5,4)  //(-ve) passed means read from right to left staring from -1
console.log(anotherString);

//trim String
const trimString = "      hello     world     "
console.log(trimString.trim());  // removes whitespace chars
console.log(trimString.trimStart); //removes from staring postion
console.log(trimString.trimEnd); //removes from ending postion


const url = "https://github.com/SrivastavaSatyam/js%20learn"
console.log(url.replace("%20","-")) 
console.log(url);  // new string is not created

const stringToArray = "hfgd-dgdjsbdj-vdhsfdf"
const arr= stringToArray.split('-')

console.log(stringToArray)
console.log(arr);
