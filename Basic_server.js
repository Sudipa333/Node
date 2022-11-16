//http core module
//http handles request and response in server in Node.js
const http = require('http');
//we can write it this also
// const dataControl=
//     (req,res)=>{
//         res.write("<h1>Hello! This is Sudipa</h1>");
//         res.end();
// }

http.createServer((req,res)=>{
res.write("<h1>Hello! This is Sudipa</h1>");
res.end();
}).listen(4500);//port number 4500 //createServer() takes parameter as a fucntion
// test(a,b){


// }

// test(10,20)
//arrow function->(short description)
function test(a){
    return a*10;
}
const test=(a)=>a*10//we can write code in one line using arrow funcion