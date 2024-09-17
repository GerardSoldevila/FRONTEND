document.getElementById('ex01').addEventListener("click", function() {
	
	if (confirm("Aquesta pàgina diu!")) {
		alert("Li has donat OK!") ;
	} else {
		alert("Li has donat Cancel!");
	}

});

/***********************************************************************************/

document.getElementById('ex02').addEventListener("click", function() {

	let age = parseInt(prompt("Quina edat tens"))
	/*
	if (edat >= 18) {
	  alert("Ets major d'edat");

	} else {
	  alert("Ets menor d'edat");
	}
	*/
	age >= 18 ? alert("Ets major d'edat") : alert("Ets menor d'edat");

});

/***********************************************************************************/

document.getElementById('ex03').addEventListener("click", function() {
	
	let num1 = parseInt(prompt("Escull un primer numero: "))
	let num2 = parseInt(prompt("Escull un segon numero: "))
	let num3 = parseInt(prompt("Escull un tercer numero: "))

	let sum = num1 + num2 + num3
	alert(sum)

});

/***********************************************************************************/

document.getElementById('ex04').addEventListener("click", function() {
	
	let num
	let sum = 0
	do {
		num = parseInt(prompt("Escull numero: "))
		if (isNaN(num)) {
			alert("Això no és un numero!")
		}
		else {
			sum += num
		}	
		
	} while (num !== 0);
	alert(sum)
	
}
);

/***********************************************************************************/

document.getElementById('ex05').addEventListener("click", function() {
	let num
	let numTotal = 0
	let sum = 0
	do {
		num = parseInt(prompt("Escull numero: "))
		if (isNaN(num)) {
			alert("Això no és un numero!")
		}
		else {
			numTotal += 1
			sum += num
		}	
		
	} while (sum < 100);
	alert("Has introduit un total de " + numTotal)
	

});

/***********************************************************************************/

document.getElementById('ex06').addEventListener("click", function() {
	let num;
	let numRandom = Math.floor(Math.random() * 100);
	let intents = 0

	do {
		
		num = parseInt(prompt("Escull numero: "))
		if (isNaN(num)) {
			alert("Això no és un numero!")
		}
		else if(num < numRandom) {
			alert("El numero introduit és més petit que el secret")
		}
		else if (num > numRandom) {
			alert("El numero introduit és mes gran que el secret")
		}
			intents += 1
			
		
	} while (num != numRandom);
	alert("Enhorabona, has encertat el numero, era el " + numRandom +". Ho has aconseguit amb un total de " + intents + " vegades")
	
});

/***********************************************************************************/

document.getElementById('exE1').addEventListener("click", function() {

	let mes = ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]
	/*let count = list() */

	
		let num 

		num = parseInt(prompt("Escriu un numero de mes i et tornare quin mes és: "))
		if (isNaN(num)) {
			alert("Això no és un numero!")
		}
		else {
			if (num >= 1 && num <= 12) {
				alert(mes[num-1])	

			}else {
				alert("Ha de ser entre 1 i 12!")
			}
	
		}	

});

/***********************************************************************************/

document.getElementById('exE2').addEventListener("click", function() {
	
	let intents = 0
	let keySecret = ["password","clauAcces","secretKey"]
	let access
	let encertat = false
	do {
		access = prompt("Introdueix la clau secreta: ")
		intents +=1
		
		{
			if (keySecret.includes(access)) {
				alert("Enhorabona! has encertat. Ho has aconseguit en " + intents + " intents.")
				encertat = true
			}else {
				alert ("Torna a provar")
			}
		}
	} while (!encertat)  
});





/**MODAL exercici 8**/

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})