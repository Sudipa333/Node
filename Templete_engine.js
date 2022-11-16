//Templete engine use to make dynamic pages
//ejs engine use
//simple html pages are static page
//when datas of a website are coming through database then
//it's called dynamic pages 

//set up dynamic routing
const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname,'public')


app.set('view engine','ejs');//to inform the engine that we use ejs engine 


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



app.get('/profile',(_,res)=>{//here profile is route
    const user={
        name: 'Sudipa Samanta',
        email: 'sudipa@test.com',
        city: 'Kolkata',
        skills:['php','js','node','java','python']//to use loop
    }
    res.render('profile',{user});//here we connect profile.ejs
  })

app.get('/login',(_,res)=>{//for creating login page
  res.render('login')
})

  app.get('*',(_,res)=>{
         res.sendFile(`${publicPath}/4o4page.html`)
     })
app.listen(5000);

