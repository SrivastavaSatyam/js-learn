function myname(){
    // console.log("hello function");
    
} //fuction defination

myname // function reference
myname() //function execution

function twoNumberAdd(num1, num2){ //(parameters)
    return num1+num2
}
// function twoNumberAdd(num1, num2){ //(parameters)
//     let res = num1+num2
//     return res
// }

const result = twoNumberAdd(3,5) //(arguments)
// console.log(`Result: ${result}`);

function loggedInUserMsg(userName ="anonymous"){
    // if(userName === undefined){
    if(!userName){
        console.log("enter username");
        return
    }
    return `${userName} just loggedIN`
}

// console.log(loggedInUserMsg("hello"))
console.log(loggedInUserMsg())
