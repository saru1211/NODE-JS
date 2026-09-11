console.log("saru is brilliant")

function greet(){
    console.log("heloooo")
}
greet()


//console.log(window) // there is no window in node js and error comes

//console.log(global) // it gives some methods

//let a = "saru"

//console.log(window.a) // throws error

//console.log(global.a) // undefined

// WHEN U USE NODE JS, IT KEEPS UR VARIABLES AND FNS INSIDE THE FILE SCOPE ONLY

//USING MODULE

const maths = require('./calculator') // method to use other file in this file

maths.addition(2,4) //fn in calculator file works coz of above line

maths.subtraction(9, 3)

maths.division(4, 2)

maths.multiplication(4, 7)

