const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const fcard1 = document.querySelector("#fcard1");
const fcard2 = document.querySelector("#fcard2");
const fcard3 = document.querySelector("#fcard3");
const fcard4 = document.querySelector("#fcard4");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function colorRandom(){

    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

}

/* TARJETA 1 */

btn1.addEventListener("click", ()=>{

    fcard1.style.backgroundColor = colorRandom();

});

/* TARJETA 2 */

btn2.addEventListener("click", ()=>{

    fcard2.style.backgroundColor = colorRandom();

});

/* TARJETA 3 */

btn3.addEventListener("click", ()=>{

    fcard3.style.backgroundColor = colorRandom();

});

/* TARJETA 4 */

btn4.addEventListener("click", ()=>{

    fcard4.style.backgroundColor = colorRandom();

});