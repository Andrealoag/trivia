//Toma el valor del id name y lo imprime de vuelta en el id bienvenida

function myFunction() {
let name = document.getElementById("name").value;
document.getElementById("bienvenida").innerHTML = "Bienvenida, " + name;

//Esconde esconde página 1 y muestra la 2
document.getElementById("interfaz1").style.display="none"
document.getElementById("interfaz2").style.display="block"

}
//Esconde la pagina 2 y muestra la primera pregunta de la trivia #1
function functionA() {
document.getElementById("interfaz2").style.display="none";
document.getElementById("responde1").style.display="block";
  }

//Cálculo de puntaje//
let pts_total= 0;
function Q1(){
  if(document.getElementById("firstC").checked) {
    pts_total = pts_total + 1;
}

document.getElementById("responde1").style.display="none"
document.getElementById("responde2").style.display="block"
}

function Q2() {
if(document.getElementById("secondA").checked) {
    pts_total = pts_total + 1;
}
  document.getElementById("responde2").style.display="none"
document.getElementById("responde3").style.display="block"
}

function Q3() {
  if(document.getElementById("thirdB").checked) {
        pts_total = pts_total + 1;
}


// Muestra página de respuestas//
  document.getElementById("responde3").style.display="none"
document.getElementById("final").style.display="block"
document.getElementById("resultado").innerHTML = "¡Tu puntaje fue " + pts_total + " puntos!";

  }

function functionB() {

  document.getElementById("final").style.display="none"
document.getElementById("interfaz2").style.display="none"
document.getElementById("reconoce1").style.display="block"

  }

//Establece el total inicial como 0 y tras cada respuesta agrega 1 si es correcta. Se usa style.display para esconder la pregunta previa y mostrar la siguiente
let ptsTotal= 0;

  function QC1(){

    if(document.getElementById("primerC").checked) {

    ptsTotal = ptsTotal + 1;}

document.getElementById("reconoce1").style.display="none"
document.getElementById("reconoce2").style.display="block"

  }

function QC2() {

           if(document.getElementById("segundaA").checked) {

    ptsTotal = ptsTotal + 1;}

    document.getElementById("reconoce2").style.display="none"

    document.getElementById("reconoce3").style.display="block"

  }

  function QC3() {

  if(document.getElementById("tercerB").checked) {

    ptsTotal = ptsTotal + 1;}


    //Esconde la ultima pregunta y muestra la ultima pagina donde se da el resultado total de puntaje


    document.getElementById("reconoce3").style.display="none"

    document.getElementById("finalreconoce").style.display="block"

  document.getElementById("resultadoreconoce").innerHTML = "¡Tu puntaje fue " + ptsTotal + " puntos!";


   //Muestra la lista de preguntas y respuestas. Marca si la persona selecciono la correcta o no

  }

//jugar de nuevo o volver a pantalla ppal//
function denuevo(){
  document.getElementById("final").style.display="none";
    document.getElementById("finalreconoce").style.display="none";
  document.getElementById("interfaz2").style.display="block"

}
