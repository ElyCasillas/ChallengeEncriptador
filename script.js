function encriptar() {
  var texto = document.getElementById("textinput").value.toLowerCase();
  var textoCifrado = texto.replace(/e/igm, "enter").replace(/i/igm, "imes").replace(/a/igm, "ai").replace(/o/igm, "ober").replace(/u/igm, "ufat");
  limpiarPantalla();
  document.getElementById("muñeco").style.display = 'none';
  document.getElementById("titulo-mensaje").style.display = 'none';
  document.getElementById("textmns").innerHTML = textoCifrado;
  document.getElementById("copiar").style.display = 'inherit';
  document.getElementById("clear").disabled = false;
}

function ocultaimagen() {
  document.getElementById("muñeco").style.display = 'none';
}
function mostrarImagen() {
  document.getElementById("muñeco").style.display = ''; // Establece el estilo de visualización a su valor por defecto para mostrar la imagen "muñeco"
}
function desencriptar() {
  var texto = document.getElementById("textinput").value.toLowerCase();
  var textoCifrado = texto.replace(/enter/igm, "e").replace(/imes/igm, "i").replace(/ai/igm, "a").replace(/ober/igm, "o").replace(/ufat/igm, "u");
  limpiarPantalla();
  document.getElementById("muñeco").style.display = null;
  document.getElementById("titulo-mensaje").style.display = 'none';
  document.getElementById("textmns").innerHTML = textoCifrado;
  document.getElementById("copiar").style.display = 'inherit';
  document.getElementById("clear").disabled = false;
}
function limpiarPantalla() {
  //document.getElementById("muñeco").style.display = 'none';
  document.getElementById("titulo-mensaje").style.display = 'none';
  document.getElementById("clear").disabled = true;
  mostrarImagen();
}
function copiar() {
  // Selecciona el texto en el área de texto
  var textoEncriptado = document.getElementById("textmns");
  textoEncriptado.select();
  
  // Copia el texto seleccionado al portapapeles
  document.execCommand("copy");
}
function limpiarTexto(){
  document.getElementById("textinput").value = " ";
  document.getElementById("textmns").innerText = " ";
}
document.getElementById("clear").addEventListener("click", limpiarTexto);
document.getElementById("clear").addEventListener("click", limpiarPantalla);
document.querySelector("#btn-encriptar").onclick = encriptar;
document.querySelector("#btn-desencriptar").onclick = desencriptar;
document.querySelector("#copiar").onclick = copiar;
document.querySelector("#limpiar").onclick = limpiarPantalla;
