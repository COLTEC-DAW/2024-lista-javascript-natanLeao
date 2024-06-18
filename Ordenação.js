function bubbleSort(array, compare){
    let n = array.length;
    let swapped;

    do{
        swapped = false;

        for (let i = 1; i < n; i++){
            if (compare(array[i - 1], array[i]) > 0){
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return array;
}

function crescente(a, b){
    return a - b;
}

function decrescente(a, b){
    return b - a;
}

function crescenteImpar(a, b){
    if (a % 2 !== 0 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 !== 0) return 1;
    if (a % 2 !== 0 && b % 2 !== 0) return a - b;
    return 0;
}

function decrescentePar(a, b){
    if (a % 2 === 0 && b % 2 !== 0) return -1;
    if (a % 2 !== 0 && b % 2 === 0) return 1;
    if (a % 2 === 0 && b % 2 === 0) return b - a;
    return 0;
}

let array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let array2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let array3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let array4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log("Original array:", array1);

console.log("Crescente: ", bubbleSort(array1, crescente));
console.log("Decrescente: ", bubbleSort(array2, decrescente));
console.log("Crescentes Impares: ", bubbleSort(array3, crescenteImpar));
console.log("Decrescente Pares: ", bubbleSort(array4, decrescentePar));
