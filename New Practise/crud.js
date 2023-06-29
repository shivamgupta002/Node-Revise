const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
let fName = "new.txt";
let filePath = `${dirPath}/${fName}`;
//------------------>   Create File

// let fDesc = "Hello World";
// fs.writeFile(filePath, fDesc,(err)=>{
//   if(!err){
//     console.log("File created successfully");
//   }
// });

//------------------>   Read File

// fs.readFile(filePath, "utf-8", (err, item) => {
//   if (!err) {
//     console.log(item);
//   }
// });

//------------------>   Edit(Append) File
// const editDesc="I am a good boy";
// fs.appendFile(filePath,editDesc,(err)=>{
//   console.log("Updated Successfully");
// })

//------------------>   Rename File
// //we can also use fs.renameSync instead of fs.rename

// let newFile = "xyz.txt";
// fs.rename(filePath, `${dirPath}/${newFile}`, (err) => {
//   if (!err) {
//     console.log("Rename successfully");
//   }
// });

// filePath = `${dirPath}/${newFile}`; //Give new file path
// //console.log(filePath);

//------------------>   Delete File
// fs.unlink(filePath,(err)=>{
//   if(!err)
//   console.log("File deleted successfully");
// })

