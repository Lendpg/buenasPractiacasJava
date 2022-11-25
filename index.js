const parrafoInicial = document.getElementById("parrafoInicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function() {
    cambiaColorAleatorio()
}

function cambiaColorAleatorio() {

    const colores = [
        "red",
        "blue",
        "green",
        "black"
    ]

    parrafoInicial.style.color = colores[Math.floor(Math.random()*colores.length)];

}

/*
TIPOS DE DATOS EN JS

var -> Se peude modificar, NO TIENE scope limitado - NO RECOMENDADA USAR
let -> Se peude modificar, tiene scope limitado - RECOMENDADA USAR
const -> Constante , no modificable - Scope global

*/

/*
CASES

PascalCase - primera letra mayuscula son Clases -  Java

camelCase - variables, funciones y atributos -  JavaScript
    variable -> parrafoInicial =
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

snake_case - Python

CASE - CONSTANTEAS
*/

