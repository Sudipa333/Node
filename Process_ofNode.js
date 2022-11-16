//Node.js execution process -->
//Node.js Event Loop has three stage1)Call stack 2)Node APIs
//3) Callback Queue
//In call stack store functions one by one
//example:

//const x =1//at first this will be stored in main function on call stack
//const y= x*2;//then it also stored in main function on call stack
//console.log(y);//then this log function will store in call stack
//at first log function will be execute then main function

//Node APIs stored intermediate programming languages like C, C++
//which programs will be written in c , c++that will be stored in Node APIs
//example:


console.log("Starting up")//as main function come to call stack

setTimeout(()=>{//setTimeout is written in cpp so go to Node APIs
    console.log("2 sec timeout")
},2000)

setTimeout(()=>{//got to Node APIs
    console.log("0 sec timeout")
},0000)

console.log("finishing up")//as a log function go to Call stack

//output:
//Starting up
// finishing up 
// 0 sec timeout
// 2 sec timeout
//then from Node APIs function will go to callback queue
//first 0 sec timeout will go to queue and wait for till
//call stack will empty
//then executing after this 2 sec timeout will come to callback queue
//and will execute incall stack 