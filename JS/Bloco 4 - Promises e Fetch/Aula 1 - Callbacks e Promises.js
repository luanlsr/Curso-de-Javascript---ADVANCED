const doSomethingPromise = () => new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve('First data')
    }, 1000)
})
const doOtherthingPromise = () => new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve('Second data')
    }, 1000)
})

// para executar as duas promises em paralelo (ao msm tempo)

Promise.all([doSomethingPromise(), doOtherthingPromise()]).then(data =>{
    console.log(data[0].split(''));
    console.log(data[1].split(''));

}).catch(err => {
    console.log(err);
})


/*console.log

[ 'First data', 'Second data' ]

com split individual
[
  'F', 'i', 'r', 's',
  't', ' ', 'd', 'a',
  't', 'a'
]
[
  'S', 'e', 'c', 'o',
  'n', 'd', ' ', 'd',
  'a', 't', 'a'
]
*/
//executa a que resolver primeiro
Promise.race([doSomethingPromise(), doOtherthingPromise()]).then(data =>{
    console.log(data);
})


//Promises aninhadas
doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherthingPromise()
    })    
    .then(data2 =>console.log(data2))
    .catch(error => console.log('Ops', error))


/*console.log
First data
Second data
*/

    //try ...catch: tratamento de erros
//Pending: pendente, está em execução
//Fulfilled: quando terminou de executar
//Rejected: acontece algum erro