const a = require("fs")

// ****READING A FILE****

let b = a.readFileSync("file.txt")

//console.log(b) it will give output in buffer format

console.log("The data: " +b) 

//****WRITING A FILE****
//when u write a data in the file then it delets/overrides the previous data

 a.writeFileSync("file1.txt", "saruuuuu") //file name followed by data u want to write

 //if u write into a file that has been deleted then it will create the file 

 console.log("The file has been written")


//****APPEND A FILE****

a.appendFileSync("file2.txt", " hiiiiii")

console.log("The file has been appended")


//****DELETE A FILE

a.unlinkSync("file1.txt")

console.log("The file has been deleted")

