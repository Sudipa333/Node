//Express.js is a framework of Node.js
//laravel.php is a framework of Php
//angular is a framework of javascript
//hibernate is framework of java


//Advantage of Express.js:--
//easy to write code than node.js
//easy way to build APIs
//routes available
//middlewares available
//GET, POST ,PUTmethods available
//We can use here html,css etc..


//for installtion command is: npm install express



const express = require('express');
const app = express();


app.get('',(req,res)=>{
    console.log("data sent by browser==>>",req.query.name)
    res.send("Hello!This is home page "+req.query.name);
})

app.get('/about',(req,res)=>{
    res.send("This is about us page");
})
app.listen(5000);