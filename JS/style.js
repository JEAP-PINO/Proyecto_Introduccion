/* Se selecciona el elemento con el ID "btn1"(icono de familia) y lo guarda en una constante para manipularlo */
const btn1 = document.querySelector("#btn1");
/* Se selecciona el elemento con el ID "btn2"(icono de estudios) y lo guarda en una constante para manipularlo */
const btn2 = document.querySelector("#btn2");
/* Se selecciona el elemento con el ID "btn3"(icono de aspiraciones) y lo guarda en una constante para manipularlo */
const btn3 = document.querySelector("#btn3");
/* Se selecciona el elemento con el ID "btn4"(icono de habilidades) y lo guarda en una constante para manipularlo */
const btn4 = document.querySelector("#btn4");

/* Se selecciona el elemento con el ID "fcard1"(tarjeta de familia) y lo guarda en una constante para manipularlo */
const fcard1 = document.querySelector("#fcard1");
/* Se selecciona el elemento con el ID "fcard2"(tarjeta de estudios) y lo guarda en una constante para manipularlo */
const fcard2 = document.querySelector("#fcard2");
/* Se selecciona el elemento con el ID "fcard3"(tarjeta de aspiraciones) y lo guarda en una constante para manipularlo */
const fcard3 = document.querySelector("#fcard3");
/* Se selecciona el elemento con el ID "fcard4"(tarjeta de habilidades) y lo guarda en una constante para manipularlo */
const fcard4 = document.querySelector("#fcard4");


const inputs = document.querySelectorAll("input");
const enlaces = document.querySelectorAll("nav a");

/* Función para generar un número aleatorio para colocarlo como codigo de color */
function random(number){
    return Math.floor(Math.random() * (number + 1));
}

/* Función para generar un color aleatorio utilizando la función random (la anterior) para cada componente RGB */
function colorRandom(){

    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

}

/* TARJETA 1 */
/* Cuando se hace clic en el botón 1 (icono de familia) */
if(btn1){
btn1.addEventListener("click", ()=>{
    /* Se cambia el color de fondo de la tarjeta 1 (familia) por un color aleatorio */
    fcard1.style.backgroundColor = colorRandom();

});
}
/* TARJETA 2 */
    /* Cuando se hace clic en el botón 2 (icono de estudios) */
if(btn2){
btn2.addEventListener("click", ()=>{
    /* Se cambia el color de fondo de la tarjeta 2 (estudios) por un color aleatorio */
    fcard2.style.backgroundColor = colorRandom();

});
}
/* TARJETA 3 */
/* Cuando se hace clic en el botón 3 (icono de aspiraciones) */
if(btn3){
btn3.addEventListener("click", ()=>{
    /* Se cambia el color de fondo de la tarjeta 3 (aspiraciones) por un color aleatorio */
    fcard3.style.backgroundColor = colorRandom();

});
}
/* TARJETA 4 */
/* Cuando se hace clic en el botón 4 (icono de habilidades) */
if(btn4){       
btn4.addEventListener("click", ()=>{
    /* Se cambia el color de fondo de la tarjeta 4 (habilidades) por un color aleatorio */
    fcard4.style.backgroundColor = colorRandom();

});
}

inputs.forEach(input => {

    /* CUANDO TIENES EL FOCO (cuando estas en el input) */
    input.addEventListener("focus", ()=>{

        input.style.backgroundColor = "#dff6ff";

        input.style.border = "2px solid rgb(124, 54, 54)";

        input.style.boxShadow = "0px 0px 10px rgb(124, 54, 54)";

        input.style.transform = "scale(1.03)";

        input.style.transition = "0.3s";

    });

    /* CUANDO QUITAS EL FOCO (cuanbdo no se esta en el input) */
    input.addEventListener("blur", ()=>{

        input.style.backgroundColor = "white";

        input.style.border = "1px solid gray";

        input.style.boxShadow = "none";

        input.style.transform = "scale(1)";

    });

});


enlaces.forEach(enlace => {

    /* CUANDO PASAS EL MOUSE */

    enlace.addEventListener("mouseover", ()=>{

        enlace.style.color = "#db5a26";

        enlace.style.transform = "scale(1.1)";

        enlace.style.transition = "0.3s";

    });

    /* CUANDO QUITAS EL MOUSE */

    enlace.addEventListener("mouseout", ()=>{

        enlace.style.color = "white";

        enlace.style.transform = "scale(1)";

    });

});