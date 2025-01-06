// singleton --> created using Constructors, is one of its kind

// object Literals

const jsObject = {
    name :"Hello ", //key can be of any name 
    "full name":"Helo World",
    age : 45,
    email : "hitesh@google.com",
    isloggedIn :false
}
// declaring symbol inside objects

const mySym = Symbol("key1")

const myObject ={
    "name":"helo",
    "full name":"Hello World",
    [mySym]:"hello"
}
// Synatax for accessing Object 
// console.log(jsObject.email)
// console.log(jsObject["email"]) //right way 
// console.log(jsObject["full name"]) //right way 


// console.log(myObject[mySym]);

// console.log(typeof myObject[mySym]);
// console.log( myObject);

// change object value 
myObject["name"]="satyam"
// console.log(myObject["name"])

// Object.freeze(myObject)  //locks the object so that its value can't be changed
myObject["name"]="Styam123"

// console.log(myObject["name"])


// passing function from objet 

myObject.greeting = function (){

    console.log("Hello from object");
    
}
// console.log(myObject.greeting); //provides the ref to the function 
// console.log(myObject.greeting());


myObject.greetingTwo = function(){
    console.log(`Hello ${this.name}`)
}
console.log(myObject.greetingTwo());
