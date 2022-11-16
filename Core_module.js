//Global module means there is no equirement to exports other files
//Non - global module means there is requirement to export other files 


//step-1)
//const ngm = require('fs');///fs(file system) is non-global module
//console.log("Code stepy step");//console is a core module &global module
//fs(file system), Buffer , HTTP is in-built function(core module) on Node.js
//step-2)fs.writeFileSync("hello1.txt","Non-global1 module");
//step-1)
const ngm = require('fs').writeFileSync;
//step-2)
ngm("abc.txt","abc non-global module")

console.log("-->>",__dirname);//directory name checking
console.log("-->>",__filename);//file name checking


