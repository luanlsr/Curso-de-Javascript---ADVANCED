//somando todos os valores
function sum(a,b){
    var value = 0 
    for (var i=0; i< arguments.length; i++){
        value += arguments[i]
    }
return value
}
console.log(sum(5,5,5,2,3));


//ES6
//rest operator ... strings, arrays, literals objects e objetos iteraveis

//pega os argumentos e transforma em um array
const sum = (...args)=>{
   return args.reduce((acc,value)=> acc + value,0)
}
console.log(sum(5,5,5,2,3));

//Pega dois argumentos e atribui o restante ao rest
const sum = (a,b,...args)=>{
    return args.reduce((acc,value)=> acc + value,0)
 }
 console.log(sum(5,5,5,2,3));
 /* a=5
    b=5
    rest{5,2,3}
*/

const multiply = (...args) => args.reduce((acc,value) => acc * value, 1)    

console.log(multiply(5,5,5,2,3));

//Spread operator ... strings, arrays, literals objects e objetos iteraveis
const multiply = (...args) => args.reduce((acc,value) => acc * value, 1)    
const sum = (...rest) =>{
    return multiply(...rest)
}
console.log(sum(5,5,5,2,3));



//Strings
const str = 'Digital Innovation One'

function logArgs(...args){
    console.log(args);
}
logArgs(...str)

//Arrays
const arr = [1,2,3,4]

function logArgs(...args){
    console.log(args);
}
logArgs(...arr)

const arr2 = [...arr, 5, 6, 7]
console.log(arr2);

const arr3 = [...arr,...arr2,8,9,10]
console.log(arr3);

const arrClone = [...arr]

//Liteterals objects
const obj = {
    test: 123
}
const obj2 = {
    ...obj,
    test2: 'Hello'
    // a ordem importa
}
console.log(obj2);

//shallow clone
//gera o clone sem mudar o primeiro objeto
const obj = {
    test: 123
}
const obj2 = {...obj}
obj2.test = 456

console.log(obj);
console.log(obj2);