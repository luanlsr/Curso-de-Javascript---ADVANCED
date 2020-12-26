//Symbols

const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')


console.log(uniqueId === uniqueId2); //false
//identificador único

//=====================================

const obj = {
    [uniqueId]: 'Hello'
}
console.log(obj);


//Symbol Iterator

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }
*/
const arr = [1, 2, 3, 4];

// const it = arr[Symbol.iterator]();

// while(true){
//     let {value, done} = it.next()
//     if(done){
//         break
//     }
//     console.log(value);
// }
for (let value of arr){
    console.log(value);
}



const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0

        return{
            next:() =>{
                i++;
                return{
                    value: this.values[i-1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


//======================================
function* hello(){
    console.log('Hello');
    yield 1

    console.log('from');
    const value = yield 2

    console.log(value);
}
const it = hello()

console.log(it.next());
console.log(it.next());
console.log(it.next('OutSide!'));

//========================
function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++
    }
}
const it = naturalNumbers()

console.log(it.next());
console.log(it.next());
console.log(it.next());

