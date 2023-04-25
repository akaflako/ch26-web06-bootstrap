 
 console.log('Hola desde un script externo');

function changeColorTo(color) {
    const refName = document.getElementById('name');
    refName.style.color = color;
}

function getReferenceFullName(){
    return document.getElementById("fullname");
}

function changeColorParagraph(color, refObj) {
    console.log(refObj);
    refObj.style.color = color;
}

function resetColors(){
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);
    for (let index = 0; index < refObjs.length; index++) {
        const element = refObjs[index];
        element.style.color = "black";       
    }
}

/* Función factible pero más larga porque es una función por cada botón*/
function changeColorToBlue() {
    const refName = document.getElementById("name");
    refName.style.color = "blue";
}

function changeColorToGray() {
    const refName = document.getElementById("name");
    refName.style.color = "gray";
}

function changeColorToRed() {
    const refName = document.getElementById("name");
    refName.style.color = "red";
}

// Boton para cambiar nombre
function changeName() {
    const name = prompt("¿Cuál es tu nombre?");
    const refName = document.getElementById("change-name");
    refName.innerHTML="Hola " + name +", ¡Bienvenido!";
  }