function criaMatriz(linhas, colunas, matrixFn){
    let matriz = [];

    for (let i = 0; i < linhas; i++){
        let linhas = [];

        for (let j = 0; j < colunas; j++){
            linhas.push(matrixFn(i, j));
        }
        matriz.push(linhas);
    }
    return matriz;
}

function sumIndices(i, j){
    return i + j;
}

function multiplyIndices(i, j){
    return i * j;
}

function identityMatrix(i, j){
    return i == j ? 1 : 0;
}

function divideIndices(i, j){
    return i * i / (j + 1);
}

function compareIndices(i, j){
    return i > j ? 1 : (i < j ? 5 : 0);
}

function printMatriz(matriz){
    for (let linhas of matriz){
        console.log(linhas.join(' '));
    }
    console.log('------------------');
}
let linhas = 5;
let colunas = 5;

console.log("Matrix with sum of indices:");
printMatriz(criaMatriz(linhas, colunas, sumIndices));

console.log("Matrix with product of indices:");
printMatriz(criaMatriz(linhas, colunas, multiplyIndices));

console.log("Identity matrix:");
printMatriz(criaMatriz(linhas, colunas, identityMatrix));

console.log("Matrix with i^2 / (j+1):");
printMatriz(criaMatriz(linhas, colunas, divideIndices));

console.log("Matrix with comparison of indices:");
printMatriz(criaMatriz(linhas, colunas, compareIndices));
