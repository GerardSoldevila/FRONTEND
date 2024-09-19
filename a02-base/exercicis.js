document.getElementById('ex01').addEventListener("click", function() {
	

	let script = prompt("Introdueix una cadena de text: ")
	
	words = script.split(" ")
	upperCase = script.toUpperCase()
	alert("Text: " + script +'\n'+ "Nombre de caracters: " + script.length +'\n'+ "Nombre de paraules: " + words.length +'\n'+ "Text en majúscules: " + upperCase)
	

});

/***********************************************************************************/

document.getElementById('ex02').addEventListener("click", function() {
	
	let script = prompt("Introdueix una cadena de text: ")
	let position = parseInt(prompt("Quina posició vols consultar?: "))
	
	while (position < 0 || position >= script.length)  {
		position = parseInt(prompt("Posicio no vàlida!"+ '\n' + "Digues una posició numèrica vàlida: "))
	}
	alert("La posicio de " + position +" de la cadena és " + script[position])

	});


/***********************************************************************************/

document.getElementById('ex03').addEventListener("click", function() {
	let cadena = prompt("Introdueix una cadena de text: ")
	let substring = cadena.substring(4,15)
	alert(substring)


});

/***********************************************************************************/

document.getElementById('ex04').addEventListener("click", function() {
	
	let cadena = prompt("Introdueix una cadena de text: ")
	let letter = prompt("Introdueix una lletra: ")
	let total = 0

	if (cadena.includes(letter)) {
		for (let i = 0; i < cadena.length; i++) {
			if (cadena[i] == letter) {
				total += 1;
			}
    }
    alert("El total de vegades de la lletra " + letter + " a la cadena " + cadena + " és " + total);
	} else {
		alert("La lletra " + letter + " no existeix a la paraula " + cadena);
	}
})
/***********************************************************************************/

document.getElementById('ex05').addEventListener("click", function() {

	let email = prompt("Introdueix una adreça de correu electronic: ")
	let sign = "@"
	let total = 0
	if (email.includes(sign)) {
		for (let i = 0; i < email.length; i++) {
			if (email[i] == sign) {
				total += 1;
				}
		if (total > 1) {
			alert("Una adreça de correu no pot tenir més d'un caracter @")
		}else if (total == 1){
			alert("L'adreça de correu especificada és correcta")
		}
		}
	}else {
		alert("Això no és un email!")
	}

});

/***********************************************************************************/

document.getElementById('ex06').addEventListener("click", function() {
	
	let num = parseFloat(prompt("Introdueix un numero amb diversos decimals: "))
	
	if (isNaN(num)) {}



});

/***********************************************************************************/

document.getElementById('ex07').addEventListener("click", function() {
	// -------------------
	// Codi exercici 7...
	// -------------------
});