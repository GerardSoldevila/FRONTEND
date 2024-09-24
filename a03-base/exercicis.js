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
			return("Això no és un valor numèric!")
		}
	}


	const arrodoniment2 = (num, n) => {

		if (!isNaN(num)) {	
			let numFixed = num.toFixed(n)
			return numFixed
			
		}
		else {
			return("Això no és un valor numèric!")
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
	

let sum 

// Funció que suma
function suma(...nums) {
    if (nums.length < 2) {
        alert("Calen almenys dos números!");
        return;
    }
    sum = 0;  // Reinicia el valor de sum per evitar que acumuli d'altres crides
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === "number") {
            sum += nums[i];
        }
    }
    return sum;
}

// Crida de prova
suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
alert(sum);
console.log(sum);


// Funció de fletxa (lambda) que suma
let myFunction = (...nums) => {
    let numbersTotal = [];

    // Filtra només els elements numèrics
    for (let x of nums) {
        if (!isNaN(x)) {
            numbersTotal.push(x);  // S'utilitza push en comptes de append
        }
    }

    if (numbersTotal.length >= 2) {
        sum = 0;  // Reinicia la suma per evitar acumulació
        for (let i = 0; i < numbersTotal.length; i++) {
            sum += numbersTotal[i];
        }
    } else {
        alert("Calen almenys dos números vàlids!");
    }
    return sum;
}

// Crida de prova
myFunction(5, 5, 5, 5);
alert(sum);
console.log(sum);


})
	



/***********************************************************************************/

document.getElementById('ex04').addEventListener("click", function() {
	
	/*let timeout;*/

	let funcio1 = () =>  {
		alert("Soc una callback!")
		
	}

	function myCallbBack(){
		setTimeout(funcio1,2000)

	}


	myCallbBack(funcio1)

});



/***********************************************************************************/

document.getElementById('ex05').addEventListener("click", function() {

	function myCallbBack(callback) {
		
		let intervalId = setInterval(callback, 2000); 
		
		setTimeout(() => {
		  clearInterval(intervalId); 
		  console.log("Interval aturat després de 10 segons");
		}, 10000); // 10000 mil·lisegons = 10 segons
		}
		
		let funcio1 = () => {
			console.log("Callback again!"); 
		};
		
	  myCallbBack(funcio1); 

	})
/***********************************************************************************/

document.getElementById('exE1').addEventListener("click", function() {
	
	let sumo 
	let resta
	let multiplica
	
	let operations = (nums1,nums2,nums3) => {
		
		if (nums1.length < 2) {
			a = ("Calen almenys dos números!");
			return(a);
			
			
		}else{
			sumo = 0;  
			
			for (let i = 0; i < nums1.length; i++) {	
				sumo += nums1[i];			
		}

		if (nums2.length < 2) {
			let b = ("Calen almenys dos números!");
			return(b);

		}else{
			resta = nums2[0];
			for (let i = 1; i < nums2.length; i++) {	
				resta -= nums2[i]				
			}
		}
		if (nums3.length < 2) {
			let c = ("Calen almenys dos números!");
			return(c);

		}else{
			
			multiplica = 1;
			
			for (let i = 0; i < nums3.length; i++) {	
				if (typeof nums3[i] == "number") {
					multiplica *= nums3[i]
				}					
			}
			
		}

		
	}
	
	}
	// Crida de prova
	//let suma = operations(99,1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
	//let resto = operations(55,5,5,5)
	//let multiplico = operations("A",5,5)
	operations([99,1, 2, 3, 4, 5, 6, 7, 8, 9, 10],[55,5,5,5],["A",5,5]);
	alert(sumo);
	alert(resta)
	alert(multiplica)

	console.log("Suma" + sumo);
	console.log("Resta" + resta)
	console.log("Multiplica" + multiplica)
	
});

