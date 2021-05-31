function inverter(){
    //var elemento  = document.getElementsByTagName("input");

    var palavra  = document.getElementById("input-1").value;

    var invertida=" ";
    
    var tela= document.getElementById("invertida");

    //var btn = document.getElementById("btn-inv");

    var numPalavra = (palavra.length - 1);

    console.log(numPalavra);
    for(numPalavra; numPalavra>=0; numPalavra--){
        console.log(numPalavra + " "+ palavra[numPalavra]);
        invertida += palavra[numPalavra];
    }

    //6 - p
    //

    tela.innerHTML=invertida;

    //BEIRA LINHA 11

    /*
    A 10
    H 9
    N 8
    I 7
    L 6 
      5
    A 4
    R 3
    I 2
    E 1
    B 0
    
    */
}