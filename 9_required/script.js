let i = 3;

// const prom = new CustomPromise(function f1 (resolve1, reject1) {
//     setTimeout(() => {
//         return reject1(100);
//     }, 2000)
// })
// prom.then(console.log, console.error)
// prom.then(a => (console.log(a*2) ), a => (console.error(a+1)))
// prom.then(a => (console.log(a*3) ), console.error)
// prom.catch(a => console.error(a-5))
// console.log(prom);
// console.log('realtime')

const trueProm = new Promise((resolve2, reject2) => {

    setTimeout(() => {
        return reject2(100);
    }, 2000)
})
console.log(trueProm)
trueProm.then(a => console.log(a*a))
trueProm.then(a => console.log(a*a*3))
trueProm.then(trueProm);
console.log(trueProm)
