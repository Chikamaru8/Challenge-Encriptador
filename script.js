//condiciòn
//a=ai
//e=enter
//i=imes
//o=ober
//u=ufat


function encriptar(){
    var texto = document.getElementById("TextoIngresadoEn").value.toLowerCase();
    
    //i para que afecte a mayuscula como minuscula
    //g para la linea u oraciòn
    //n para que afecte a multiples lines o parrafos
    var textCifrado = texto.replace(/e/igm,"enter");
    var textCifrado = texto.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"imes");
    var textCifrado = textCifrado.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");
    
    //document.getElementById("Muneco").style.display = none; para hacer desaparecer el Muñeco
    /*document.getElementById("Muneco").style.display = "none";*/
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display="inherit";

}

function desencriptar(){
    var texto = document.getElementById("TextoIngresadoEn").value.toLowerCase();
    
    //i para que afecte a mayuscula como minuscula
    //g para la linea u oraciòn
    //n para que afecte a multiples lines o parrafos
    var textCifrado = texto.replace(/enter/igm,"e");
    var textCifrado = texto.replace(/ober/igm,"o");    
    var textCifrado = textCifrado.replace(/imes/igm,"i");
    var textCifrado = textCifrado.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");
    
    //document.getElementById("Muneco").style.display = none; para hacer desaparecer el Muñeco
    document.getElementById("Muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display="inherit";

}

function copy(){
    var contenido = document.querySelector("#texto2");
    var texto=contenido.textContent;
    /*contenido.Select();
    document.contentEditable("cut");*/
    /*para copiar del portapapel (navigator.clipboard.writeText(contenido.textContent)*/
    navigator.clipboard.writeText(contenido.textContent)
    alert("Texto Copiado");

    
}

