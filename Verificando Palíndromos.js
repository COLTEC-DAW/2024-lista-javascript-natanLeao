function verificarPalindromo(palavra){
    let palavraLimpa = palavra.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let palavraInvertida = palavraLimpa.split('').reverse().join('');
    
    if (palavraLimpa === palavraInvertida){
        return "A palavra é um palíndromo!";
    } else{
        return "A palavra não é um palíndromo.";
    }
}
let palavra = prompt("Digite uma palavra para verificar se é um palíndromo: ");
let resultado = verificarPalindromo(palavra);

console.log(resultado);
