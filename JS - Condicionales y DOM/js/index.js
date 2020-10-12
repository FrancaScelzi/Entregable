// Alert de bienvenida

alert ("¡Bienvenidos a mi sitio!")

//  En caso que no quiera avanzar
let reply = confirm ("¿Estás seguro de querer avanzar?")

if (reply == false) {
   let falseReply = document.querySelector(".subtitulo");
    falseReply.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble"
}

else {
    let trueReply = document.querySelector (".subtitulo");
    trueReply.innerHTML = "¡Que alegría que quieras seguir con tu visita por este maravilloso sitio!"
}

let name = prompt("¿Cuál es tu nombre?");
console.log (name);

let saludo = document.querySelector (".titulo");
saludo.innerHTML = "Bienvenidx " + name; 

let edad = prompt ("¿Qué edad tienes?");

let acceso = document.querySelector ("body");

if (edad < 18 ) {
    acceso.style.display= "none"
}

let modoOscuro = confirm ("¿Desea utilizar el modo oscuro?")

if (modoOscuro == true) {
    acceso.style.backgroundColor= "dimgray";
    acceso.style.color="white"
}

let diaDeSemana = "Domingo"

if (diaDeSemana == "Domingo") {
    body.innerHTML = "Hoy es día descanso"
}


