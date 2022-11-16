//we can access others files created on specific folder(here public folder) using this program
//to render specific file on browser we have to type--
//example:->localhost:5000/home.html

const express = require('express')
const path = require('path'); //path is module here
//path modue helps us to access our folders
const app = express();

const publicPath = path.join(__dirname,'public')//joning public folder with directory
//console.log(__dirname)
//here we can't access css file using publicPath bcoz 
//it only can access html file directly

app.use(express.static(publicPath))//'use' function is a function of executable express and static function is also another kind of express function 
//static function use to load static content 
app.listen(5000);

//css can't be loaded bcoz this path is coming from js file that only loaded anyway only html file 
//that can't load all everything properly
