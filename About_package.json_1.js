//after installing npm chalk library. 
//Command (npm i chalk)
const chalk = require('chalk');
console.log(chalk.green("Success!"));

const message = chalk.green("Success!");
console.log(message);

//if node module folder deleted then you 
//can install by commanding 'npm install' in terminal
//you can remove node_modules folder by creating .gitignore file
//and write /node_modules in it .
//node_modules file should remove because it takes above 2GB that's 
//not beneficial for git repository
 