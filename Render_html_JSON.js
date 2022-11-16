//render(display) html or json page
const express = require('express')
const app = express();

app.get('',(req,res)=>{
   res.send(
    `<h1>Welcome!! home page</h1>
    <a href='/about'>Go to about page</a>
    `)
})

app.get('/about',(req,res)=>{//rendering html
    
    res.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    
    <button>Click me</button>
    <a href="/">Go to home page</a>
    `);
})

app.get("/help",(req,res)=>{
    res.send([  //redering JSON
        {
        name:'Sudipa Samanta',
        email:'sudipasamamta@gmail.com'
        },
        {
            name:'Subha Samanta',
            email:'subhacc@gmail.com'
        }

    ])
})
app.listen(3000);