function deepEquals(obj1, obj2){
    if (obj1 === obj2) return true;

    if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object'){
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1){
        if (!keys2.includes(key) || !deepEquals(obj1[key], obj2[key])){
            return false;
        }
    }

    return true;
}

console.log(deepEquals({a: 1, b: 2}, {a: 1, b: 2}));
console.log(deepEquals({a: 1, b: 2}, {a: 1, b: 3}));
console.log(deepEquals({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}}));
console.log(deepEquals({a: 1, b: {c: 3}}, {a: 1, b: {c: 4}}));
console.log(deepEquals({a: 1, b: 2}, {a: 1, b: 2, c: 3}));
