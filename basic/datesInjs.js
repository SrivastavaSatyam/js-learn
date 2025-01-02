const myDate = new Date()

console.log(typeof myDate) //object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());


// const createdDate = new Date(2025,0,30)
const createdDate = new Date("01-30-2020")
console.log(createdDate.toLocaleString());


const checkMonth = new Date()
console.log(checkMonth.getDay());

console.log(checkMonth.toLocaleString('default',{
    weekday:"long",
    // dateStyle : "medium"
}))
