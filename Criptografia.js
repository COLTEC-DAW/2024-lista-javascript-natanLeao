function criptografia(str, encryptFn){
    let encryptedArray = [];

    for (let i = 0; i < str.length; i++){
        encryptedArray.push(encryptFn(str[i]));
    }
    return encryptedArray.join('');
}

function CifraCesar(char){
    const shift = 3;
    const charCode = char.charCodeAt(0);
    
    if (char >= 'A' && char <= 'Z'){
        return String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    }

    else if (char >= 'a' && char <= 'z'){
        return String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    }

    return char;
}
let originalString = "Coltec";

console.log("Original string: ", originalString);
console.log("Cifra de Cesar: ", criptografia(originalString, CifraCesar));
