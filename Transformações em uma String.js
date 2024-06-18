function transformString(str, transformFn){
    let transformaArray = [];

    for (let i = 0; i < str.length; i++){
        transformaArray.push(transformFn(str[i]));
    }
    return transformaArray.join('');
}

// Função para transformar vogais em caixa alta
function upperCaseVogal(char){
    const vowels = "aeiou";

    if (vowels.includes(char.toLowerCase())){
        return char.toUpperCase();
    }
    return char;
}

function upperCaseConsoantes(char){
    const vowels = "aeiou";

    if (!vowels.includes(char.toLowerCase())){
        return char.toUpperCase();
    }
    return char;
}

function lowerCaseVogal(char){
    const vowels = "aeiou";

    if (vowels.includes(char.toLowerCase())){
        return char.toLowerCase();
    }
    return char;
}

function lowerCaseConsoantes(char){
    const vowels = "aeiou";

    if (!vowels.includes(char.toLowerCase())){
        return char.toLowerCase();
    }
    return char;
}

let originalString = "Coltec";

console.log("Original string:", originalString);
console.log("Uppercase vowels:", transformString(originalString, upperCaseVogal));
console.log("Uppercase consonants:", transformString(originalString, upperCaseConsoantes));
console.log("Lowercase vowels:", transformString(originalString, lowerCaseVogal));
console.log("Lowercase consonants:", transformString(originalString, lowerCaseConsoantes));
