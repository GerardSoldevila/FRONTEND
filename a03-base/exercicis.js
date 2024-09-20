document.getElementById('ex01').addEventListener("click", function() {
	
	function validaCorreu() {
		let email = prompt("Introdueix una adreça de correu electronic: ")
		let sign = "@"
		let total = 0
		if (email.includes(sign)) {
			for (let i = 0; i < email.length; i++) {
				if (email[i] == sign) {
					total += 1;
					}					
			if (total > 1) {	
				return false
			}else{
				return true
			}
			}
		}else {
			return false
		}
	}
	let retorn = validaCorreu()
	alert(retorn)
});

/***********************************************************************************/

document.getElementById('ex02').addEventListener("click", function() {
	// ------------------
	// Codi exercici 2...
	// ------------------
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

document.getElementById('exE1').addEventListener("click", function() {
	// -------------------
	// Codi exercici E1...
	// -------------------
});

