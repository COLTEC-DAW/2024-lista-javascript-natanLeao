function mod2(number){
    return number % 2 == 0;
}

function mod(num, mod){
    return num % mod == 0;
}

console.log(mod2(10));
console.log(mod2(7));
console.log(mod(10, 5));
console.log(mod(15, 2));
