function range(min, max, i = 1){
    let array = [];

    for (let num = min; num <= max; num += i){
        array.push(num);        
    }
    return array;
}

console.log(range(1, 5, 1));
console.log(range(1, 10, 2));
console.log(range(-5, 5, 3));
console.log(range(0, 20, 5));
