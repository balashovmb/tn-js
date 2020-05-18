const array = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
let result = {
    count: 0,
    sum: 0,
};

array.forEach( element => {
    if (element < 0) {
        result.count += 1;
        result.sum += element; 
    }
})

console.log(result);