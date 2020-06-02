function mapOnReduce(arr, callback) {
    return arr.reduce((accum, current) => {
        accum.push(callback(current));
        return accum;
    }, []);
}

function filterOnReduce(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First arg is not an array');
    }
    return arr.reduce((accum, current) => {
        if (callback(current)) {
            accum.push(current);
        }
        return accum;
    }, []);
}
