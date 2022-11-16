//this is express version of node.js
//express apllication uses a callback function whose
//parameters are request and response
//how we put data from form in server
const express = require("express");
const app = express();
const port = 3000
main.use(express.static("public"));

//app.use(express.static(__dirname));
//app.use(express.urilencoded({extended:false}))
//app.use(express.json());
//app.post("/addtask",(req,res)=>{
    //console.log(req.body.taskname);

    //fs.readFile(__dirname+"/task.txt",JSON.stringyfy)
//})
const bodyparser = require("body-parser");
bodyparser.urlencoded({extended:false});

main.get("/signup" , parse , (req,res)=>{
    // console.log(req.query);
    // res.end("Welcome"+req.query.yourname);
    console.log(req.body);
    res.end("Welcome"+ res.query.yourname);
})
main.listen(3000,()=>{
    console.log("Server started");
})