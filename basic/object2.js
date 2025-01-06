const tinderUser = new Object() //Singleton object
tinderUser.tinderUser="123saf"
tinderUser.name = "Satyam"
tinderUser.isloggedIn = false

const regularUser = {
    email :"user@gamil.com",
    fullname :{
        userfullname:{
            fullname:"Abc",
            lastname:"xyz"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.fullname);

// optin chaining require if some key is not found inside nested Objects
console.log(regularUser.fullname?.userfullname);

const obj1={1:"11",2:"22"}
const obj2={5:"2",4:"3"}

// const obj3 = {obj1,obj2}
// console.log(obj3);
const obj3 = Object.assign({},obj1,obj2) // assigns the value to the target, hence an emty value is added since we are storing in a  new variable/object
// console.log(obj3);
console.log(obj1)

// using spread operator

const obj4 = {...obj1,...obj2}
console.log(obj4);

const users= [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"hfff@gmail.com"
    }
]

console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser)) // returns array of keys
console.log(Object.values(tinderUser)) // returns array of values
console.log(Object.entries(tinderUser)) // returns key values pair as array

console.log(tinderUser.hasOwnProperty('isloggedIn')); //return booean values
