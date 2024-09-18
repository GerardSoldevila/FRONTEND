document.getElementById('ex01').addEventListener("click", function() {
	

	let script = prompt("Introdueix una cadena de text: ")
	
	words = script.split(" ")
	upperCase = script.toUpperCase()
	alert("Text: " + script +'\n'+ "Nombre de caracters: " + script.length +'\n'+ "Nombre de paraules: " + words.length +'\n'+ "Text en majúscules: " + upperCase)
	

});

/***********************************************************************************/

document.getElementById('ex02').addEventListener("click", function() {
	
	let script = prompt("Introdueix una cadena de text: ")
	let position = parseInt(prompt("Digues una posició numèrica: "))
	

	do {
		position = prompt("Digues una posició numèrica vàlida: ")

	} while (position < 0 || position > script.length)
	
	newScript = script.split(" ")	
	alert(newScript[position])	 

});

/***********************************************************************************/

document.getElementById('ex03').addEventListener("click", function() {
	// ------------------
	// Codi exercici 3...
	// ------------------
});

/***********************************************************************************/

document.getElementById('ex04').addEventListener("click", function() {
	// ------------------
	// Codi exercici 4...
	// ------------------
});

/***********************************************************************************/

document.getElementById('ex05').addEventListener("click", function() {
	// ------------------
	// Codi exercici 5...
	// ------------------
});

/***********************************************************************************/

document.getElementById('ex06').addEventListener("click", function() {
	// ------------------
	// Codi exercici 6...
	// ------------------
});

/***********************************************************************************/

document.getElementById('ex07').addEventListener("click", function() {
	// -------------------
	// Codi exercici 7...
	// -------------------
});