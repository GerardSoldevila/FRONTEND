// ------------------
// Codi exercici 1...
// ------------------


let coincidencies = [0, 0, 0, 0, 0, 0];

const nums = document.querySelectorAll('.ex01-input');

document.querySelector("#ex01-img").addEventListener("click", function(event) {
	console.log("🖱️ Esdeveniment click");
	let random = Math.floor((Math.random() * 6)+1);
	this.src = "img/ex01/" + random + ".png";
	
	//comptador
	coincidencies[random - 1]++;
    
    nums.forEach((input, index) => {
        input.value = coincidencies[index];
    });

});

/***********************************************************************************/

// ------------------
// Codi exercici 2...
// ------------------

const itemFields = document.querySelectorAll(".ex02-item");
const priceFields = document.querySelectorAll(".ex02-price");
const totalField = document.querySelector("#ex02-total");
const memberCheckbox = document.querySelector("#isMember");

const updateTotal = function() {
    let total = 0;

    // Calcular preu total
    for (let j = 0; j < itemFields.length; j++) {
        total += parseInt(itemFields[j].value) * parseFloat(priceFields[j].value);
    }

    // descompte del 10% si és soci
    if (memberCheckbox.checked) {
        total *= 0.90; 
    }

    totalField.value = total.toFixed(2);
}
// Esdeveniments inputs
for (let i = 0; i < itemFields.length; i++) {
    // Esdeveniment change
    itemFields[i].addEventListener("change", function(event) {
        console.log("♻️ Esdeveniment change");
        updateTotal();
    });

    // Esdeveniment keydown
    itemFields[i].addEventListener("keydown", function(event) {
        if (event.key === "Enter") { 
            event.preventDefault(); 
            if (i + 1 < itemFields.length) {
                itemFields[i + 1].focus(); 
            }
        }
    });
}

// Esdeveniment checkbox
memberCheckbox.addEventListener("change", function(event) {
    console.log("🔄 Esdeveniment change en la casella de soci/a");
    updateTotal();
});

// Inicialitzar el preu total
updateTotal();
/***********************************************************************************/

// -----------------------
// Codi exercicis 3 i 4...
// -----------------------

const forms = document.querySelectorAll('.needs-validation')
// Reggex per fer les validaccions:
const regexEquip = /^[a-zA-Z0-9_]{4,10}$/; // 4-10 alfanumèrics amb guió baix
const regexMac = /^([0-9a-fA-F]{2}:){5}([0-9a-fA-F]{2})$/; // Adreça MAC
const regexIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; // Adreça IP
// Loop over them and prevent submission
Array.from(forms).forEach(form => {
	form.addEventListener('submit', event => {
		let ok = form.checkValidity()
		console.log("Validation [" + form.id + "]: " + ok)
		 // Validacions personalitzades
		 const machine = form.querySelector('#machine');
		 const mac = form.querySelector('#mac');
		 const address = form.querySelector('#address');
 
		 if (machine.value && !regexEquip.test(machine.value)) {
			 ok = false;
			 machine.classList.add('is-invalid');
			 machine.nextElementSibling.innerText = "Introdueix un nom vàlid (4-10 caràcters alfanumèrics i guió baix)";
		 } else {
			 machine.classList.remove('is-invalid');
		 }
 
		 if (mac.value && !regexMac.test(mac.value)) {
			 ok = false;
			 mac.classList.add('is-invalid');
			 mac.nextElementSibling.innerText = "Introdueix una adreça MAC vàlida";
		 } else {
			 mac.classList.remove('is-invalid');
		 }
 
		 if (address.value && !regexIp.test(address.value)) {
			 ok = false;
			 address.classList.add('is-invalid');
			 address.nextElementSibling.innerText = "Introdueix una adreça IP vàlida";
		 } else {
			 address.classList.remove('is-invalid');
		 }


		form.classList.add('was-validated')
		event.preventDefault()
		event.stopPropagation()
	}, false)
})