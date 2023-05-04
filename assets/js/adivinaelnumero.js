let min = 1;
let max = 100;
let guess = Math.floor((min + max) / 2);
let counter = 0;

document.getElementById("comenzarBtn").addEventListener("click", function() {
	document.getElementById("comenzarBtn").style.display = "none";
	document.getElementById("adivinaP").style.display = "block";
	document.getElementById("adivinaNumero").style.display = "block";
	document.getElementById("adivinaNumero").textContent = guess;
	document.getElementById("botones").style.display = "flex";
});

document.getElementById("siBtn").addEventListener("click", function() {
	document.getElementById("adivinaNumero").textContent = `¡Tu número es el ${guess}!`;
	document.getElementById("botones").style.display = "none";
    document.getElementById("gracias").style.display = "inline";
    document.getElementById("playAgain").style.display = "inline";

});

document.getElementById("noBtn").addEventListener("click", function() {
	let respuesta = confirm(`¿Tu número es mayor que ${guess}?`);

	if (respuesta) {
		min = guess + 1;
	} else {
		max = guess - 1;
	}

	guess = Math.floor((min + max) / 2);
	document.getElementById("adivinaNumero").textContent = guess;
	counter++;

	if (counter === 7) {
		alert("Lo siento, no pude adivinar tu número.");
		document.getElementById("comenzarBtn").style.display = "block";
		document.getElementById("adivinaP").style.display = "none";
		document.getElementById("adivinaNumero").style.display = "none";
		document.getElementById("botones").style.display = "none";
		counter = 0;
	} else {
		document.getElementById("botones").style.display = "flex";
	}
});

document.getElementById("playAgain").addEventListener("click", function() {
    location.reload();
});
