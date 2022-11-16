//Route-level middleware can work upon sigle route,group of routes and whole routes

const express = require('express')
const reqFilter = require("./Route-level_middleware_1");//to put function on different file
const app = express();
const route = express.Router();//for route-level for group




//app.use(reqFilter);//route-level for sigle route 
route.use(reqFilter);//for route-level for group
app.get('/',(req,res)=>{
    res.send("Welcome to our home");
})
//route-level for single route
app.get('/users',reqFilter,(req,res)=>{//use reqFilter middleware to put filter on only upon user
    res.send("Welcome to our user's page");
})
//route-level for group route
route.get('/about',(req,res)=>{//when we use middleware on many routers then we can use express.Router() function instead of using reqFiltr middleware
    res.send("Welcome to our about page");
})
route.get('/contact',(req,res)=>{
    res.send("Welcome to our contact page");
})
app.use('/',route);//for route-level for group
app.listen(3000);