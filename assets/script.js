const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Création nouveaux éléments flèches dans le html + Ajout de eventListener sur les flèches
let arrowLeft = document.createElement("img")
arrowLeft.src = "./assets/images/arrow_left.png"
arrowLeft.alt = "flèche vers l'image précédente"
arrowLeft.classList.add("arrow", "arrow_left")
arrowLeft.addEventListener("click", () => {
	console.log("photo précédente")
})

let arrowRight = document.createElement("img")
arrowRight.src = "./assets/images/arrow_right.png"
arrowRight.alt = "flèche vers l'image suivante"
arrowRight.classList.add("arrow", "arrow_right")
arrowRight.addEventListener("click", () => {
	console.log("photo suivante")
})


//////////// AUTRE VERSION PLUS CONCISE DU CODE CI-DESSUS ///////////

// function createArrow(src, alt, classes) {
//     let arrow = document.createElement("img")
//     arrow.src = src
//     arrow.alt = alt
//     classes.forEach(cls => arrow.classList.add(cls))
//     return arrow
// }

// let arrowLeft = createArrow("./assets/images/arrow_left.png", "flèche vers l'image précédente", ["arrow", "arrow_left"])
// let arrowRight = createArrow("./assets/images/arrow_right.png", "flèche vers l'image suivante", ["arrow", "arrow_right"])
////////////////////////////////////////////////////////


// Ajout & placement des éléments flèches dans la div correspondante
let divBanner = document.getElementById("banner")
divBanner.appendChild(arrowLeft)
divBanner.appendChild(arrowRight)
divBanner.insertBefore(arrowLeft, divBanner.childNodes[2])
divBanner.insertBefore(arrowRight, divBanner.childNodes[3])


// Ajout des bulletpoints au slider
let dots = document.querySelector(".dots")

let dotSelected = document.createElement("span")
dotSelected.classList.add("dot", "dot_selected")
dots.appendChild(dotSelected)


for (i = 0; i < 3; i++) {
	let dot = document.createElement("span")
	dot.classList.add("dot")
	dots.appendChild(dot)
}


// Modification du slide au click
for (i = 0; i < slides.length; i++) {
	arrowRight.addEventListener("click"), () => {

	}
}











