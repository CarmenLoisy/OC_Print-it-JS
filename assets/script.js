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
////Mettre un event listener sur chacune des flèches
const arrowRight = document.querySelector("#js-arrow_right");
arrowRight.addEventListener("click", function () {
	console.log("arrowRight");
});
const arrowLeft = document.querySelector("#js-arrow_left");
arrowLeft.addEventListener("click", function () {
	console.log("arrowLeft");
});

//Ajouter les bullet points sur la partie basse du slider
// Récupération d'odject dots
const dotContainer = document.querySelector("#js-dots");
console.log(dotContainer + " Récupération d'odject dots");
// creation d'element nouveau point
const newDot = document.createElement("span"); 
// Ajouter classList a cet element
newDot.classList.add("dot"); 
// Afficher nouveau point
dotContainer.appendChild(newDot); 