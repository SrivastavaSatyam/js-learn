// IIFE ---> Immediately Invoked Function Expression  - it is used to reduce the global scope pollution   

// function One(){
//     console.log('DB CONNECTED')
// }
// One() //Normal execution 

// Execution Usinf IFFE Technique

// (function One(){
//     console.log('DB CONNECTED')
// })  //==>  function Defination 

//Named iffe
(function One(){ 
    console.log('DB CONNECTED')
})(); //===> Fucntion Execution 

// unnammed iffe
(
    (name)=>{
        console.log(`DB CONNECTED TWO ${name}`);
        
    }
)("sam") //values passed in execution