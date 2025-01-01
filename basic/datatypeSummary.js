// Primitive 
//  BigInt, Symbol, String, Number, Boolean, null, undefined

const score = 100 //number
const isLogged = true //Boolean
const outTemp = null 
let userName ; //value not passed but declared (undefined)

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) //return value is not same but data type created is Symbol
const bigNumber  = 323241331343123143242n //bigInt 

// Non_Primitive (Reference)

// Array Objects Functions

const arrayVal = ["fe","vre","rv"]

let myObj = {
    "age":12,
    "name ":"Sfsdf"
}

const functionDataType = function(){
    console.log("Hello World from funtion");
    
}

// Data type and return type => https://262.ecma-international.org/5.1/#sec-11.4.3

// for Non-primitive data type type is coniderd as Fuction only but for Function it is considered as Function Object