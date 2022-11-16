let a = 20;
let b =0;

let waitingData = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(30)
  },2000)
})//this Promise function returns 30 as a result after 2sec

waitingData.then((data)=>{//after returing the result, pass the result to this arraow function
    b = data;
    console.log(a+b);
})