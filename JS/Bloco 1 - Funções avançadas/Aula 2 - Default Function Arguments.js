function multiply(a,b){
    return a * b;
}
console.log(multiply(5,5));
//deve-se passar os dois parâmetros da função

//ES6
function multiply(a,b = 1){
    //Usa-se o '= 1' para garantir que caso não seja definido um dos parâmetros o valor será atribuído com o valor após o igual
    return a * b;
}
console.log(multiply(5));


function multiply(a,b = a){
    
    return a * b;
}
console.log(multiply(5));

//Lazy evaluation
function RandomNumber(){
    return Math.random()*10
}

function multiply(a,b = RandomNumber()){
    
    return a * b;
}
console.log(multiply(5).toFixed(2));

