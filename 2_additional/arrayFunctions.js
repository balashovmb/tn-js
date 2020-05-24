let array = [1, 2, 3, 4]

function mapOnReduce(arr, callback) {
    return arr.reduce((accum, current) => {
        accum.push(callback(current));
        return accum;
    }, []);
}

console.log(mapOnReduce(array, item => item * 2));

function filterOnReduce(arr, callback) {
    return arr.reduce((accum, current) => {
        if (callback(current)) {
            accum.push(current);
        }
        return accum;
    }, []);
}

console.log(filterOnReduce(array, item => item > 2));