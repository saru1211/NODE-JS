function add(a, b){
    console.log(a+b)
} 

function sub(a, b){
    console.log(a-b)
} 

function mul(a, b){
    console.log(a*b)
} 

function div(a, b){
    console.log(a/b)
} 

module.exports={ // creating our own module
    addition : add,
    subtraction : sub,  
    multiplication : mul,
    division : div

} // these will be imported in test.js