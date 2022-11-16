const http = require('http');//https helps to make API and handle request ,response
const data = require('./Simple_API_1.js');
http.createServer((req,res)=>{   //parametarized function(callback function)
res.writeHead(200,{'Content-Type':'application\json'});  //200 is response code(basic API standard),type of response is Content-Type
res.write(JSON.stringify(data));//create object
res.end();
}).listen(5000);
//response header 200-->OK
//response header 201-->created
//response header 404-->Not found
//response header 500-->Internal server error