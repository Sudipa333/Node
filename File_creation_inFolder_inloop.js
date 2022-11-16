const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'Node_folder');//complete path

//Create files in Node_Folder using loop
// for(i=0;i<5;i++){
//   fs.writeFileSync(dirPath+ "/loopFile"+i+".txt","a simple txt file");
//   //2nd trick to write the above line:-->fs.writeNode_folderync(`loopFile${i}.txt`,"a simple txt file");
 
// }



//access files in Node_folder
fs.readdir(dirPath,(err,Node_folder)=>{   //for read the Node_folder in directory
//    console.log(Node_folder)

Node_folder.forEach((item)=>{
    console.log("file name is",item)
})

})

//but we can access the folders which are in the 
//exist under the node directory (node server)
//we can't access the c drive folders using node.js 