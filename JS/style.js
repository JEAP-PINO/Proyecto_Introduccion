const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const fcard1 = document.querySelector("#fcard1");
const fcard2 = document.querySelector("#fcard2");
const fcard3 = document.querySelector("#fcard3");
const fcard4 = document.querySelector("#fcard4");


const inputs = document.querySelectorAll("input");
const enlaces = document.querySelectorAll("nav a");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function colorRandom(){

    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

}

/* TARJETA 1 */

if(btn1){
btn1.addEventListener("click", ()=>{

    fcard1.style.backgroundColor = colorRandom();

});
}
/* TARJETA 2 */
    
if(btn2){
btn2.addEventListener("click", ()=>{

    fcard2.style.backgroundColor = colorRandom();

});
}
/* TARJETA 3 */

if(btn3){
btn3.addEventListener("click", ()=>{

    fcard3.style.backgroundColor = colorRandom();

});
}
/* TARJETA 4 */

if(btn4){       
btn4.addEventListener("click", ()=>{

    fcard4.style.backgroundColor = colorRandom();

});
}

inputs.forEach(input => {

    input.addEventListener("focus", ()=>{

        input.style.backgroundColor = "#dff6ff";

        input.style.border = "2px solid rgb(124, 54, 54)";

        input.style.boxShadow = "0px 0px 10px rgb(124, 54, 54)";

        input.style.transform = "scale(1.03)";

        input.style.transition = "0.3s";

    });

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