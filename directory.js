const a = require("fs")

//***Create A Directory : its actually a folder

a.mkdirSync("myDirectory") // method stored inside file system module


//***TO CHECK THE FOLDER CONTENT***
let path ="C:\\Users\\sarum\\OneDrive\\Documents\\New folder\\NODE JS\\myDirectory"

const b = a.readdirSync(path)

console.log("The folder content: " ,b)//use comma instead of plus while calling coz it gives in array


//****TO CHECK WHETHER THE DIRECTORY EXIST OR NOT****

let d = a.existsSync("mydirector") // return boolean values

let e = a.existsSync("demo.js") // It works for files also

console.log(d)

console.log(e)


//****REMOVE A DIRECTORY****
//ur directory must be empty before deleting/removing

a.rmdirSync("myDirectory")

