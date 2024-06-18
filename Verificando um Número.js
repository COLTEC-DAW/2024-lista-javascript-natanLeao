function checkNumber(num, verifica){
    return verifica(num);
}

function ehImpar(num){
    return num % 2 !== 0;
}

function ehPrimo(num){
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}
let num1 = 7;
let num2 = 10;

console.log(`${num1} é ímpar?`, checkNumber(num1, ehImpar));
console.log(`${num2} é ímpar?`, checkNumber(num2, ehImpar));

console.log(`${num1} é primo?`, checkNumber(num1, ehPrimo));
console.log(`${num2} é primo?`, checkNumber(num2, ehPrimo));
