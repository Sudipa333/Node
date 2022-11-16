// let http = require("http");
// http.createServer((req , res )=> {
//     res.end("Welcome");
// }).listen(3000 , (err)=>{
//     console.log("Server started...");
// });

const http = require("http");//here http is a library
const fs = require("fs"); //here fs( file server) is a library 
const server = http.createServer(function(req , res){
    console.log(req.url);
    if(req.url=="/")
    res.end("Welcome to home page");
    else if(req.url=="/about us"){
     fs.readFile("about us" , function(err , data){
        res.end(data);
     })
    }
     else if(req.url=="/script.js"){
        fs.readFile("script.js" , function(err , data){
            res.end(data);
        });
     
    }
    //res.end("Welcome to aboutus page");
    else if (req.url=="/about us.html")
    res.end("Weilcome to about us html page");
    //res.end("Welcome");
})
// server.listen(3000 , function(err){
//     if(err)
//     console.log("Server issue");
//     else
//     console.log("Server is started....");
// });


