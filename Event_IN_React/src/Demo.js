// function greet(){
//     console.log("Welcome");
// }

// function execute(fun){
//     console.log(" in execute function")
//     fun();
// }
// execute(greet);


const number = [1,2,3,4];
let newNumber = number.map(function(n){
    return n*2;
})

// console.log(newNumber)

let newNum = number.map(n=>n*2);
console.log(newNum)

const num = [21,3,1,4,6];
let evennum = num.filter(n=>n%2==0);
console.log(evennum)