function mapOnReduce(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First arg is not an array');
    }
    if (typeof callback != 'function') {
        throw new TypeError('Second arg is not a function');
    }
    return arr.reduce((accum, current) => {
        accum.push(callback(current));
        return accum;
    }, []);
}

function filterOnReduce(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First arg is not an array');
    }
    if (typeof callback != 'function') {
        throw new TypeError('Second arg is not a function');
    }
    return arr.reduce((accum, current) => {
        if (callback(current)) {
            accum.push(current);
        }
        return accum;
    }, []);
}
