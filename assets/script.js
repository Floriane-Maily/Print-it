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
// arrowLeft.addEventListener("click", () => {
// 	console.log("photo précédente")
// })

let arrowRight = document.createElement("img")
arrowRight.src = "./assets/images/arrow_right.png"
arrowRight.alt = "flèche vers l'image suivante"
arrowRight.classList.add("arrow", "arrow_right")
// arrowRight.addEventListener("click", () => {
// 	console.log("photo suivante")
// })


// Ajout & placement des éléments flèches dans la div correspondante
let divBanner = document.getElementById("banner")
divBanner.appendChild(arrowLeft)
divBanner.appendChild(arrowRight)
divBanner.insertBefore(arrowLeft, divBanner.childNodes[2])
divBanner.insertBefore(arrowRight, divBanner.childNodes[3])


// création des bulletpoints
let dotDiv = document.querySelector(".dots");
let dots = dotDiv.children;

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	dotDiv.appendChild(dot)
}


// Slides
const carousel = document.querySelector("#banner");
const carouselImage = carousel.children.item(0);
const carouselTag = carousel.children.item(1);

let count = 0

function bulletPoints() {
	for (let i = 0; i < dots.length; i++) {
		if (i === count) {
			dots[i].classList.add("dot_selected");
		}
		else {
			dots[i].classList.remove("dot_selected");
		}
	}
}


arrowRight.addEventListener("click", function () {
	count++
	if (count >= slides.length) { count = 0 }
	carouselImage.src = "./assets/images/slideshow/" + slides[count].image;
	carouselTag.innerHTML = slides[count].tagLine
	bulletPoints()
})

arrowLeft.addEventListener("click", function () {
	count--
	if (count < 0) { count = slides.length - 1; }
	carouselImage.src = "./assets/images/slideshow/" + slides[count].image
	carouselTag.innerHTML = slides[count].tagLine
	bulletPoints()
})


















