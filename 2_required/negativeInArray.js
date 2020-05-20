const array = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];

function negativeInArray(array){
    const negativeArray =  array.filter( element => (element < 0) );
    const count = negativeArray.length;
    const sum = negativeArray.reduce( (a,b)  => a + b );

    return {count, sum};
}

console.log(negativeInArray(array));