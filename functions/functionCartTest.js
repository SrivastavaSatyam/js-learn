// function calculateCartprice(...num1){   //here (...) represent rest operator
//     return num1 //return array
// }
function calculateCartprice(val1, val2,...num1){   //here (...) represent rest operator
    return num1 //return 6 as first 2 values are stored inside val1 and val2 and rets values are passed in num1
}
console.log(calculateCartprice(2,5,6));


const user ={
    username:"hello",
    price :5600
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"Sam",
    price :966
})

const myArray =[200,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(`Retun Second value ${returnSecondValue(myArray)}`);
