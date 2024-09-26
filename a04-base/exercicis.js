// ------------------
// -------------------
// Codi exercici 1...
// -------------------


const links = document.querySelectorAll('.list-group-item');

links.forEach(link => {
    
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'red'; 
        this.style.textTransform = 'uppercase'; 
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; 
        this.style.textTransform = 'capitalize'; 
    });
});

/***********************************************************************************/
// -------------------
// Codi exercici 2...
// -------------------


//jugador inicial com a 'X'
let jugadorActual = 'X';

const caselles = document.querySelectorAll('.cross-game');
const resetButton = document.getElementById('ex02-reset');

caselles.forEach(casella => {
    casella.addEventListener('click', function() {
        
        if (casella.textContent === '?') {
            casella.textContent = jugadorActual;
            casella.style.backgroundColor = jugadorActual === 'X' ? 'blue' : 'yellow';
            jugadorActual = (jugadorActual === 'X' ? 'O' : 'X');
        }
    });
});

resetButton.addEventListener('click', function() {
    caselles.forEach(casella => {
        casella.textContent = '?';
        casella.style.backgroundColor = 'white';
    });
    jugadorActual = 'X';
});


/***********************************************************************************/
// -------------------
// Codi exercici 3...
// -------------------


let coincidencies = 0;

const images = document.querySelectorAll('.count-game');
const startButtonImages = document.getElementById('ex03-start');
const resetButtonImages = document.getElementById('ex03-reset');

// Paths de les imatges
const interrogant = 'img/ex04/interrogant.png';
const imagesList = [
    'img/ex04/planta1.jpg',
    'img/ex04/planta2.jpg',
    'img/ex04/planta3.jpg',
    'img/ex04/zombie1.jpg',
    'img/ex04/zombie2.jpg',
    'img/ex04/zombie3.jpg'
];


startButtonImages.addEventListener('click', function() {
    let imagesCount = {}; 
    let matchCoincidencies = false; 
    
    images.forEach(image => {
        let randomIndex = Math.floor(Math.random() * imagesList.length); 
        let randomImage = imagesList[randomIndex]; 
        image.src = randomImage; 

        // Actualitzar el comptador de cada imatge
        if (imagesCount[randomImage]) {
            imagesCount[randomImage]++;
        } else {
            imagesCount[randomImage] = 1;
        }
    });

    for (let key in imagesCount) {
        if (imagesCount[key] > 1) {
            matchCoincidencies = true;        
        }
    }

    if (matchCoincidencies) coincidencies++;
   
    const resultText = document.getElementById('ex03-result'); 
    resultText.textContent = `Coincidències: ${coincidencies}`;
});

resetButtonImages.addEventListener('click', function() {
    coincidencies = 0; 
    images.forEach(image => {
        image.src = interrogant; 
        image.style.backgroundColor = 'white'; 
    });

    const resultText = document.getElementById('ex03-result'); 
    resultText.textContent = `Coincidències: ${coincidencies}`; 
});



/***********************************************************************************/
// -------------------
// Codi exercici 4...
// -------------------

const image = "img/ex04/eventPropagationExplained.png"

document.querySelector("#ex04-parent").addEventListener("click", function(event) {
	alert("⚠️⚠️⚠️ Esdeveniment element PARE!!! ⚠️⚠️⚠️");
})

document.querySelector("#ex04-child").addEventListener("click", function(event) {
	alert("Esdeveniment element fill! 👶");
    alert("W3Schools says: The stopPropagation() method prevents propagation of the same event from being called.Propagation means bubbling up to parent elements or capturing down to child elements.")
    event.stopPropagation();
})


/***********************************************************************************/

/***********************************************************************************/

// -------------------
// Codi exercici E1...
// -------------------

document.querySelector("#exE1").addEventListener("click", function(event) {
	// NO TOCAR
	location.href="exE1.html";
})