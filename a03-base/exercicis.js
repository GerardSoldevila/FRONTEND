document.getElementById('ex01').addEventListener("click", function() {
	
	function validaCorreu(email) {
	
		let sign = "@"
		let total = 0
		if (email.includes(sign)) {
			for (let i = 0; i < email.length; i++) {
				if (email[i] == sign) {
					total += 1;
					}	
				}				
			if (total > 1) {	
				return false
			}else{
				return true
			}		
		}else {
			return false
		}
	}

	
	const validaCorreuAnonima = function(email) {
		let sign = "@"
		let total = 0
		if (email.includes(sign)) {
			for (let i = 0; i < email.length; i++) {
				if (email[i] == sign) {
					total += 1;
					}	
				}				
			if (total > 1) {	
				return false
			}else{
				return true
			}		
		}else {
			return false
		}

	}

	const validaCorreuFletxa = (email) => {
		let sign = "@"
		let total = 0
		if (email.includes(sign)) {
			for (let i = 0; i < email.length; i++) {
				if (email[i] == sign) {
					total += 1;
					}	
				}				
			if (total > 1) {	
				return false
			}else{
				return true
			}		
		}else {
			return false
		}

	}


	let correus = ["correu@bo.cat", "correu@dolent.@cat", "correudolent.cat"]
	
		// Funció normal
	alert("Funció normal: " + validaCorreu(correus[0]));
	alert("Funció normal: " + validaCorreu(correus[1]));
	alert("Funció normal: " + validaCorreu(correus[2]));

	// Funció anònima
	alert("Funció anònima: " + validaCorreuAnonima(correus[0]));
	alert("Funció anònima: " + validaCorreuAnonima(correus[1]));
	alert("Funció anònima: " + validaCorreuAnonima(correus[2]));

	// Funció de fletxa
	alert("Funció de fletxa: " + validaCorreuFletxa(correus[0]));
	alert("Funció de fletxa: " + validaCorreuFletxa(correus[1]));
	alert("Funció de fletxa: " + validaCorreuFletxa(correus[2]));
		
});

/***********************************************************************************/

document.getElementById('ex02').addEventListener("click", function() {
	
	const arrodoniment1 = (num, n) => {

		if (!isNaN(num)) {	
			let numFixed = num.toFixed(n)
			return numFixed		
		}
		else {
			alert("Això no és un valor numèric!")
		}
	}


	const arrodoniment2 = (num, n) => {

		if (num) {	
			let numFixed = num.toFixed(n)
			return numFixed
			
		}
		else {
			alert("Això no és un valor numèric!")
		}

	}

	
	//funcio1 
	let retorn1 = arrodoniment1(1.2233, 2)
	alert(retorn1)

	let retorn2 = arrodoniment1("1.25666", 2)
	alert(retorn2)

	let retorn3 = arrodoniment1("hola", 2)
	alert(retorn3)

	let retorn4 = arrodoniment1("hola", 2.5)
	alert(retorn4)

	//funcio2
	let retorn5 = arrodoniment2(1.2233, 2)
	alert(retorn5)

	let retorn6 = arrodoniment2("1.25666", 2)
	alert(retorn6)

	let retorn7 = arrodoniment2("hola", 2)
	alert(retorn7)

	let retorn8 = arrodoniment2("hola", 2.5)
	alert(retorn8)
	
});


/***********************************************************************************/

document.getElementById('ex03').addEventListener("click", function() {
	
	const sum = function(nums1,nums2) {


	}

	let nums1 = [1,2,3,4,5,6,7,8,9,10]
	alert(nums1)
	let nums2 = [5,5,5,5]
	alert(nums2)
	


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

