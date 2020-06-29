const prom = new CustomPromise();

const prom2 = new CustomPromise();

const prom3 = CustomPromise.reject(10);

const prom4 = CustomPromise.resolve(20);

function thenAndCatch(promise) {
    promise.then(console.log, console.error);
    promise.catch(result => console.error(result - 5));
}

thenAndCatch(prom);
prom.reject(100);

prom2.resolve(200);
thenAndCatch(prom2);

thenAndCatch(prom3);
thenAndCatch(prom4);

const prom5 = prom4.then(res => res - 1).then(res => res + 5);
prom6 = prom4.then(res => res * 100);
prom7 = prom4.then();
console.log(prom5)
console.log(prom6);
console.log(prom7);