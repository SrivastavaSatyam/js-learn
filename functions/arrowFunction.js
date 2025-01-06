const user ={
    username:"Hello User",
    price : 999,

    welcomeMessage :function(){
        console.log(`${this.username} Welcome to the website`) //(this) here represents current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username ="Sam"
// user.welcomeMessage()
// console.log(this);   //this here returns empty object as there is no global context as e are in side node env

// check same on browser  --> Global object is Window


// function chai(){
//     let username = "sam"
//      console.log(this)
//     // console.log(this.username) //returns undefined as we are inside func and this is not accessible inside functions
// }
// chai()

// const chai = function(){
//     let username = "sam"
//     console.log(this.username)
// }
const chai = () => {
    let username = "sam"
    // console.log(this.username)
    console.log(this) //returns empty obj
}
// chai()

// const addTwo = (num1,num2)=>{ //basic arrow function
//     return num1+num2
// }
// const addTwo = (num1,num2)=> num1+num2 //it by default recognizies that the function will return 
// const addTwo = (num1,num2)=> (num1+num2) //when parenthesis is passed no need to pass return

// const  addTwo = (num1,num2) =>{username :"Sam"} // will not return any values as object can not be returned like this
const  addTwo = (num1,num2) =>({username :"Sam"}) 
console.log(addTwo(5,2));


const MyArray =[1,5,2,6,7,5]
// MyArray.forEach(()=>())