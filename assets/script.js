const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
]
// Récupérer un élément du DOM en fournissant son id
const arrowRight = document.getElementById("js-arrow_right")
const arrowLeft = document.getElementById("js-arrow_left")
const dotContainer = document.getElementById("js-dots")
const imageBanner = document.getElementById("js-banner-img")
const textBanner = document.getElementById("js-text-img")

let currentIndex = 0 // Initialisation de l'index courant
let listDots = [] // Initialise avec un tableau vide pour ajouter les points
// Création des points indicateurs et ajout des écouteurs d'événements
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div") // Création d'un div avec createElement
	newDot.classList.add("dot") // Ajouter de la class .dot dans la nouvelle div
	dotContainer.appendChild(newDot) // Ajouter le nouvel: div .dot au parent existant: div #js-dots
	listDots.push(newDot) // Ajouter la classe dot_selected à la première diapositive
	newDot.addEventListener("click", () => handleDotClick(i))
}
// Fonction pour mettre à jour la diapositive en fonction de l'index donné
function updateSlide(index) {
	const currentSlide = slides[index] //Récupération de la diapositive actuelle
	imageBanner.src = `./assets/images/slideshow/${currentSlide.image}` // Mise à jour de l'image
	textBanner.innerHTML = currentSlide.tagLine // Mise à jour du texte
	console.log(`Vous êtes sur la photo ${currentSlide.image}`)
}
// Fonction pour mettre à jour la classe dot_selected
function updateDot() {
	listDots.forEach((dot, i) => {
	  dot.classList.toggle("dot_selected", i === currentIndex)
	})
  }

// Fonction pour gérer les clics sur les flèches (1 pour droite, -1 pour gauche)
function handleArrowClick(increment) {
	currentIndex = (currentIndex + increment + slides.length) % slides.length // Calcul du nouvel index en prenant en compte la boucle infinie
	updateSlide(currentIndex) // Mise à jour de la diapositive
	updateDot()
}
// Gestionnaires d'événements pour les clics sur les flèches
arrowRight.addEventListener("click", () => handleArrowClick(1))
arrowLeft.addEventListener("click", () => handleArrowClick(-1))
//Fonction pour gérer les clics sur les points indicateurs
function handleDotClick(index) {
	currentIndex = index //// Mise à jour de l'index
	updateSlide(currentIndex)
	updateDot()
}
updateSlide(currentIndex) // Initialise la première diapositive
updateDot()  // Ajout de cette ligne pour sélectionner le premier point indicateur par défaut