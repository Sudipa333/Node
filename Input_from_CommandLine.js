//In this input from command line we want to pass the input from commandline(terminal)
//so from 'console.log(process.argv)' we get two output. 1)the file where node.js is executing
//2)second is current file

console.log(process.argv)

//after consoling this you can give input from commandline
// structure of command is-->(nodemon filename inputs) ex: nodemon .\Input_from_CommandLine.js hello hi
//inputs are stored in array
 console.log(process.argv[2])//output is hello
 console.log(process.argv[3])//output is hi




//New program using commandline
const fs = require('fs');

const input = process.argv;
if(input[2]=='add'){
fs.writeFileSync(input[3],input[4])//input[2] for file name ,input[3]
//for some texts of file
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])//it remove any file
}
else{
    console.log("Invalid input")
}