var arr = ['Apple' ,' Banana' , 'Orange'];

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]

//DESTRUCTURING ASSIGNMENT

var [apple2, banana2, orange2] = ['Apple' ,' Banana' , 'Orange'];

console.log(apple, apple2);


//===================================

var obj = {
    name: 'Celso',
    props: {
        age: 29,
        colors: ['Black', 'Blue']
    }
}

var name = obj.name
//DESTRUCTURING ASSIGNMENT Multiníveis

var {name} = obj
var {props: {age:age2, colors:[color1, color2]}} = obj //pegou dentro da propriedade props a propriedade age e colors e atribuiu o valor nas novas variáveis age2, color1 e color2

console.log(age2,  color1, color2);

//===============================

function sum(arr){
    return arr[0] + arr[1];
}
console.log(sum([5,5]));

//DESTRUCTURING ASSIGNMENT
function sum(arr){
    var a = arr[0]
    var b = arr[1]
    return a + b
}
console.log(sum([5,5]));

function sum([a,b] = []){ //default values
    return a + b
}
console.log(sum([5,5]));