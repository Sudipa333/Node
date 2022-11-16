//middleware is a functin which is used to modify and access request and response
//we can modify the request and response through route but we have ton write code again and again
//so to avoid it we use middleware
//we can check some condition like user signed in or not , user's age etc
//for modification, filteration , authentication,checking we use middleware  

//There are 5 types of middleware--1)Application level 2)Router-level 3)Error-level 4)Built-in
//5)Third-party middleware
const express = require('express')
const reqFilter = require('./Route-level_middleware_1')
const app=express();

//next middleware(Application level)
const reqFilter=(req,res,next)=>{//next function will make the function proceed for the next procedure 
//console.log('reqFilter');
if(!req.query.age){
    res.send("please provide age");
}
else if(req.query.age>18){
    res.send("You can't access this page");
}
else{
next();
}
}
app.use(reqFilter);
app.get('/',(req,res)=>{
res.send("Welcome to User's page");
})
app.listen(3000)
