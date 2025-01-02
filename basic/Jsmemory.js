//Primitive uses Stack Memory

let name = "svgjmrth"

let antherName = name
console.log(antherName); // this stores the copy of name instead of it value 

antherName = "New Name"
console.log(antherName); // new value retured as it is stored newly

//Non_primitve Uses Heap Memory 

let userOne = {
    email:"userone@gmail.com",
    upi:"userone@ybl"
}

let userTwo = userOne

console.log(userTwo) // stores value from reference 

userTwo.email = "userTwo@gamil.com"
console.log(userTwo)  
console.log(userOne)  //changed the value of userOne also as it is passed from refence 
