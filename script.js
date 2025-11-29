const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentIndex = 0;

// Sélection des éléments HTML
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const dotsContainer = document.querySelector(".dots");

// --- Création des "dots" dynamiquement ---
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// --- Fonction d'affichage d'une image ---
function showSlide(index) {
  // Bouclage : retour au début ou fin
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  // Mise à jour image + texte
  bannerImg.classList.add("fade-out");
  setTimeout(() => {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
    bannerImg.classList.remove("fade-out");
  }, 300);

  // Mise à jour des dots
  dots.forEach(dot => dot.classList.remove("dot_selected"));
  dots[index].classList.add("dot_selected");

  currentIndex = index;
}

// --- Événements flèches ---
prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));


