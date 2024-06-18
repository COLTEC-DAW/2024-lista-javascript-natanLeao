function forma(linha){
    let triangulo = "";

    for (let i = 0; i < linha; i++){
        for (let j = 0; j < i + 2; j++){
            triangulo += "#"
        }
        triangulo += "\n";        
    }
    console.log(triangulo);
}
let numLinhas = prompt("Digite o numero de linhas do triangulo: ");

forma(numLinhas);
