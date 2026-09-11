const p = require("path")


let ex = p.extname("C:\Users\sarum\OneDrive\Documents\New folder\NODE JS\file.txt") 
//the above line gives u the extension of the file u want to display


let base = p.basename("C:\\Users\\sarum\\OneDrive\\Documents\\New folder\\NODE JS\\file.txt")
//the above line gives u the name of the file u want to know and use double slash


console.log(ex)

console.log(base)

console.log(__filename) //it will show u the path of the current file ur working

console.log(__dirname) //it will show u the directory of the current file ur working