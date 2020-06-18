let i = 3;

const prom = new CustomPromise((resolve, reject)=>{
    if(i < 0 ){
        reject(0);
    } else {
        resolve(1);
    }
})
prom.then(console.log, console.error)
console.log(prom);
console.log('realtime')