//Node.js is asynchronous programing language
//javascript is also asynchronous programing language
//php is synchronous programing language

//in synchronous operation tasks are performed one at a time
//in asynchronous , second task don't wait to finish first task

//example of asynchronous operation:--
console.log("start exe...")

setTimeout(()=>{
    console.log("logic exe...")
},2000)
console.log("complete exe...")

//drawbacks of asynchronous operation
let a = 10;
let b = 0;

setTimeout(()=>{
    b = 20;
    console.log(b)
},2000)

console.log(a+b)//this operation don't take 
//b=20 it'll take b=0 bcoz setTimeout function 
//makes the function delay so it can't update the data
