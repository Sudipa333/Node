  
  //About Node  
//     Node is not a language.
//  This is a server environment.
//  Node can connect with database.
//  Code and syntax is similar to js.
//  But not exactly the same.
//  Node is free open source.
//  Node use Chrome V8 engine to execute code.
 
//Usage of Node
//  Node mostly used for API
//  So we can connect the same database with Web App , Mobile App
//  Node is super fast for API.

//History of Node 
//  First Release: May 27 , 2009
//  Current Version: 16.4
//  Written in C , C++ , JavaScript

//JavaScript & Node are the same?
// JavaScript and Node.js Code Syntax is Same
// We cannot connect js with server & Database
// Node can connect with Database
// Node run on server side to upload , delete files
// js run on browser , Node run on server




// Client side----Request -----Server side
//            <----Response----(through API)
// (js,html,css)               (Node.js,python,php)


//Chrome uses V8 engine to execute Javascript program and node js also use V8 engine to execute their program,V8 engine internal process written in C++

//Developers make API with Node.js to connect server with client
//Node can make API for web, Amdroid and IOS etc.
//Also can make website
  
// const Tutorial_1 = require('./Tutorial_1');
// var x = 10;
// console.log(x); //this console.log is not browser's console , here it's Node.js's in-built program
//console.log(), console.error() , console.warn() all are console class with methods
//console is used for debugging the code
//when we run it on browser it retuens undefined because this part of code has no return type 


const arr = [2,3,4,5,6,7];

let result=arr.filter((item)=>{
 return item>4;
})
console.log(result);
// console.log(Tutorial_1.x);
// console.log(Tutorial_1.y);
// console.log(Tutorial_1.z());