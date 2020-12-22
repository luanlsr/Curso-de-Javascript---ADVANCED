var obj = {
    prop1: 'Digital Innovation One'
}
console.log(obj);


var prop1 = 'Digital Innovation One';
var obj = {
    prop1: prop1
};
console.log(obj);

//ES6
var prop1 = 'Digital Innovation One';
var obj = {
    prop1    //omite-se a segunda declaração
};
console.log(obj);

var obj = {
    sum: function/*'sum', que pode ser omitido*/(a,b){
        return a + b;
    }
};

console.log(obj.sum(2,2));

var obj = {
    sum(a,b){
        return a + b;
    }
};
console.log(obj.sum(2,5));


var propName = 'test';

var obj = {
    [propName + 'concat']: 'prop value'
}
console.log(obj);
