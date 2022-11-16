module.exports= reqFilter = (req,res,next)=>{
    if(!req.query.age){
      res.send("Age is not provided");
    }
    else if(req.query.age<18){
       res.send("You're under age");
    }else{
      next();
    }
}