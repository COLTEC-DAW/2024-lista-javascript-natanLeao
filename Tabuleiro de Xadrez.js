function xadrez(linha){
    let tabuleiro = "";

    for (let i = 0; i < linha; i++){
        for (let j = 0; j < linha; j++){
            tabuleiro += "# "
        }
        tabuleiro += "\n";  
        
        if (i % 2 == 0){
            tabuleiro += " ";       
        } 
    }
    console.log(tabuleiro);
}
let numLinhas = prompt("Digite o numero de linhas do tabuleiro: ");

xadrez(numLinhas);
