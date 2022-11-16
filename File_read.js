//CRUD (create, read , update , delete)

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'Crud');
const filePath = `${dirPath}/file_read_1.txt`

//fs.writeFileSync(filePath, "This is a simple txt file")
// fs.readFile(filePath,'utf8',(err,item)=>{
//  console.log(item)
// })
//if you don't write buffer here then it returns buffer
//buffer means the memory which node.js needs to perform operation while file system creates on server 



// fs.appendFile(filePath,' and file name is file_read_1',(err)=>{
//     if(!err) console.log("file is updated")
// })

fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("file name is updated")
})

// fs.unlinkSync(`${dirPath}/fruit.txt`)