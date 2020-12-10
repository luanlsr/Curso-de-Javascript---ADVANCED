//Arrow Functions
//Defalt Function Arguments
//Enhanced Object Literals

//TODOArrow Functions

//funções padrões
function log(value){
    console.log(value);
}
log('test')

//funções anonimas

var log = function(value){
    console.log(value);
}
log('test') 

var sum = function(a, b){
    return a + b; 
}
console.log(sum(5,5));

//arrow functions
//   => arrows

//omite o return quando do lado direito do arrow for apenas uma expressão 
//return implícito
var sum = (a, b) => a + b;
console.log(sum(5,10));

//Quando for definir condicionais, repetição ... precisa do return e {}
var sum = (a ,b) =>{
    return a + b;
}
console.log(sum(5,6));

//quando existir apenas um argumento omite-se os ()
var sum = a => a + 5;

//retorno de objeto
var createObj = () => ({test: 123});

console.log(createObj);

//arrow function não pode ser utilizada com função construtora
//arrow function deve-se declarar a função antes de executar 

//método this
var obj = {
    showContext: function(){
        console.log(this);
    },
    log: function log(value){
        console.log(value);
    }
}
obj.showContext();