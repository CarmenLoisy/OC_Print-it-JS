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
];
// Récupérer un élément en fournissant son id 
const arrowRight = document.getElementById("js-arrow_right");
const arrowLeft = document.getElementById("js-arrow_left");

////Mettre un event listener sur chacune des flèches
arrowRight.addEventListener("click", function () {
	console.log("arrowRight")
});
arrowLeft.addEventListener("click", function () {
	console.log("arrowLeft")
});

//Ajouter les bullet points sur la partie basse du slider
// Récupérer un élément en fournissant son id 
const dotContainer = document.getElementById("js-dots")
console.log(dotContainer)

// Creation de la balise div pour ajouter les bulles
const newDot = document.createElement("div")
console.log(newDot)

// Sélectionner la div pour y ajouter une class: .dot, voir css
 newDot.classList.add("dot")
 console.log(newDot)

// Ajouter la div: .dot dans la div: #js-dots
dotContainer.appendChild(newDot)
console.log(newDot)