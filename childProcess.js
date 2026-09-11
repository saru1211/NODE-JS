
const cp = require("child_process") //importing child process module



cp.execSync("calc") //execsync is a method of child process which executes synchronously
//by executing the above command you can open a calculator



//cp.execSync("start chrome") // this cmd opens the chrome



cp.execSync("start chrome https://share.google/Z5roIgPySGgASwRki ") 
//if u paste any website link after chrome in the above cmd it will open that website



console.log("output: " +cp.execSync("node demo.js")) // accessing diff file