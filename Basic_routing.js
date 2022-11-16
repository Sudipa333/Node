const express = require("express");
const app = express();
app.use(express.static("public"));
const port = 8081

//This respond with "hello World " on the homepage
app.get('/', function(req, res){
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

//This respond a POST request for the homepage

//app.use(express.static("public"));
app.post('/', function(req,res){
    console.log("Get a post request for the homepage");
    res.send('Hello POST');
})

app.listen(8081,()=>{
    console.log("Server started");
})
//This responds a delete request for the /del_user page
app.delete('/del_user', function (req,res){
    console.log("Got a DELETE reqyest for /del_user");
    res.send("hello DELETE");
})

//This responds a GET request for the /list_uer page
app.get('/list_user', function (req,res){
    console.log("Got a GET request for/list_user");
    res.send('Page Listing');
})

//This responds a GET request for abcd, abxcd , ab123cd , and so on 
app.get('ab*cd', function(req, res){
    console.log("Got a GET request for /ab*cd");
    res.send('Page pattern match');
})

 var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listning at http://%s:%s", host, port)
 })
