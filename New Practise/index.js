// console.log("Hello world");
// console.log(__dirname);
// console.log(__filename);

// const fs = require("fs");   //*****Include fs********

// let newFileName = "abc.txt";      //File Name
// let newFileDes="Hello World,I am Shivam Gupta."  //File content

//------>write File
// fs.writeFileSync(newFileName, newFileDes);

// let file = __dirname+'/' + newFileName;
// console.log(file);     //File name which we read

//------> Read file
// try {
//   const data = fs.readFileSync(file, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

//------>create Server
// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.write("<h1>Hello World</h1><p>Hi,I am Shivam</p>");
//     resp.end;
//   })
//   .listen(4000);

//------>Fetch data
/*
const http = require("http");
http
  .createServer((req, resp) => {
    resp.write(
      JSON.stringify([
        { name: "Shivam", email: "shivam9@gmail.com" },
        { name: "Gupta", email: "gupta99@gmail.com", contact: "9929090937" },
      ])
    );
    resp.end();
  })
  .listen(5000);
  */

//------>Fetch data from another File(data file)
/*
const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);
*/

// -----> Create a file through cmd
// (you have to give an input in cmd like-->  node index.js  abc.txt "hello world")

// const fs = require("fs");
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);

// -----> Create and delete a file through cmd
// (you have to give an input in cmd like-->  node index.js add/remove abc.txt "hello world")
/*
const fs = require("fs");
const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid input");
}
 */

//---------> create more than one new file in other(file) folder

/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "file");
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/Hello${i + 1}.txt`, "Hello World");
}
*/

//---------> Read File name in other(file) folder
/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "file");
fs.readdir(dirPath, (err, file) => {
  file.forEach((item) => {
    console.log(item);
  });
});
*/

//---------> Create a new file in other(file) folder
/*
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'file');
// console.log(dirPath);
const fname='abc.txt';
const fDesc="hello world,I am shivam"
fs.writeFileSync(dirPath+'/'+fname,fDesc);
*/

//---------> Read File from other(file) folder
/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "file");
const filePath=`${dirPath}/abc.txt`;
fs.readFile(filePath,'utf-8',(err,item)=>{
  console.log(item);
})
*/

//---------> Edit a  file in other(file) folder which is created previously
/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "file");
const filePath = `${dirPath}/abc.txt`;
fs.appendFile(filePath, " Gupta", (err) => {
  if (!err) console.log("file is updated");
});
*/

//---------> Rename a file from other(file) folder which is created previously
/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "file");
const filePath = `${dirPath}/abc.txt`;

fs.rename(filePath,`${dirPath}/xyz.txt`,(err)=>{
  if(!err){
    console.log("File name updated successfully");
  }
})
*/

//---------> Delete a file from other(file) folder which is created previously
/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "file");
const filePath=`${dirPath}/xyz.txt`
fs.unlink(filePath,(err)=>{
  if(!err){
    console.log("Deleted successfully");
  }
})
*/
