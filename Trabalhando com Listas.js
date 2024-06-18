function toList(array){
    let list = null;

    for (let i = array.length - 1; i >= 0; i--){
        list = { value: array[i], rest: list };
    }
    return list;
}

console.log(JSON.stringify(toList([1, 2, 3])));
console.log(JSON.stringify(toList([])));
