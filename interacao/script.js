var textoInput = document.querySelector("#input-texto");
var output = document.querySelector("#output");

function criptografar() {
    var texto = textoInput.value;
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    output.innerHTML = '<textarea readonly class="output-texto">' + resultCripto + 
        '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textoInput.value;
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    output.innerHTML = '<textarea readonly class="output-texto">' + resultDescripto + 
        '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.querySelector('.output-texto');
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}
