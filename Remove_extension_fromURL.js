//we remove extension from URL bcoz of security purpose
//content page and URL should be different
//to access the files on specific folder on browser we have to type-->
//(example:->)localhost:3000/about


//4o4 page is reder when user put invalid URL which don't exist  

const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname,'public')

app.get('',(_,res)=>{
  res.sendFile(`${publicPath}/home.html`)  //using snedFile 
  //we can use 'sendFile' to load file in get method
})

app.get('/aboutme',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
  })

//   app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/help.html`)
//   })//you can create help file on public folder and access it

app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/4o4page.html`)
})
app.listen(3000);
