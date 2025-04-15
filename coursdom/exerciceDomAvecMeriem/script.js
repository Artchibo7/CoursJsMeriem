                    //******************* EXERCICES DOM *******************//

//**💪 TP DOM JS — Interactions Progressives.
//**Ce TP propose des exercices progressifs pour apprendre à manipuler le DOM en JavaScript.
//**Chaque exercice introduit un nouveau concept ou une nouvelle interaction.

//**🟡 Exercice 1 : Manipulation simple du DOM.
//**Objectif: Modifier des éléments HTML via JavaScript.

// Mettre para2 en bleu.
// const para2 = document.querySelector("#para2");
// para2.style.color = "blue";

// Ajouter un border pointillé noir à section2.
// const section2 = document.querySelector("#section2");
// section2.style.border = "2px dotted black";

// Mettre un fond orange à .colorful.
// const colorful = document.querySelector(".colorful");
// colorful.style.backgroundColor = "orange";

// Mettre le h2 de section1 en italique.
// const section1 = document.querySelector("#section1");
// const h2 = section1.querySelector("h2");
// h2.style.fontStyle = "italic";

// Cacher l’élément .colorful.
// const colorful = document.querySelector(".colorful");
// colorful.style.display = "none";

// Modifier le texte de para2 par "modified by JS".
// const para2 = document.querySelector("#para2");
// para2.textContent = "modified by JS";

// Changer le href du lien pour https://www.lilo.org/.
// const link = document.querySelector("a");
// link.href = "https://www.lilo.org/";
// link.textContent = "https://www.lilo.org/";

// Ajouter la classe big-text au h2 de section2.
// const section2 = document.querySelector("#section2");
// const h2 = section2.querySelector("h2");
// h2.classList.add("big-text");

// Mettre tous les paragraphes en italique.
// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach((p) => {
//     p.style.fontStyle = "italic";
// });

// Faire apparaître les modifications progressivement avec setTimeout().
// setTimeout(() =>
// document.querySelector(".colorful")
// .style.backgroundColor = "orange", 3000
// );

// setTimeout(() => {
//     document.querySelector(".colorful").style.backgroundColor = "orange";
//   }, 3000);

//**🿱 Exercice 2 : Changer la couleur de fond dynamiquement.
//**Objectif: Créer une fonction qui change dynamiquement la couleur de fond de la page.

// Créer une fonction randomBg() qui retourne une couleur HSL aléatoire.
function randomBg() {
  const hue = Math.floor(Math.random() * 360); // Teinte (0-359)
  const saturation = Math.floor(Math.random() * 51) + 50; // Saturation (50-100%)
  const lightness = Math.floor(Math.random() * 31) + 40; // Luminosité (40-70%)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Ajouter un événement sur le bouton pour changer la couleur de fond de la page.
document.getElementById("btnColors").addEventListener("click", () => {
  const color = randomBg();

  // Afficher la couleur utilisée dans le `span#color`.
  document.body.style.backgroundColor = color;
  document.getElementById("color").textContent = `Couleur : ${color}`;
});

//**⚫ Exercice 3 : Activer un Dark Mode.
//**Objectif: Permettre de passer en mode sombre avec un clic.

// Ajouter un événement sur le bouton.
document.getElementById("toggleDark").addEventListener("click", () => {
  // alert('Dark mode');
});

// Ajouter/retirer la classe dark-mode au <body> au clic.
document.getElementById("toggleDark").addEventListener("click", () => {
  // document.body.classList.toggle('dark-mode');            ://les deux methodes fonctionne
  document.querySelector("body").classList.toggle("dark-mode");
});

// Sauvegarder le mode choisi dans localStorage.
document.getElementById("toggleDark").addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
});

// Le restaurer au chargement de la page.
// Charger le mode choisi au chargement de la page.
window.addEventListener("load", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark-mode", isDarkMode);
});

//**🔹 Exercice 4 : Afficher une modale.
//**Objectif: Afficher une popup personnalisée. (soit avec une div oubien avec la balise dialog).

// Afficher la modale au clic sur le bouton.
document.getElementById("openModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
  // alert("Modal opened");
});

// - Cacher la modale au clic sur la croix.
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// - Bonus : fermer aussi en cliquant hors de la modale ou sur échappe.
document.addEventListener("click", (event) => {
  if (event.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
});

//**🔴 Exercice 5 : Cercle qui suit la souris (mousemove).
//**Objectif: Créer un cercle qui suit les mouvements de la souris.

// - Faire en sorte que le cercle suive la souris (utiliser `mousemove`).
// const cercle = document.getElementById("follower");

// document.addEventListener("mousemove", (event) => {
//   cercle.style.left = event.clientX + "px";
//   cercle.style.top = event.clientY + "px";
//   cercle.style.transform = "translate(-50%, -50%)"; // on peut faire ça avec js ou CSS

// });

// - Bonus : ajouter un décalage ou un effet de suivi.
// document.addEventListener("mousemove", (event) => {
//   cercle.style.left = event.clientX + "px";
//   cercle.style.top = event.clientY + "px";
//   cercle.style.transform = "translate(-50%, -50%)";
//   cercle.style.transition = "transform 0.1s ease-in-out";
//   cercle.style.transition = "transform 0.1s ease-in-out, left 0.1s ease-in-out, top 0.1s ease-in-out";
// })

//**🎯 Exercice 6 : Le juste prix.
//**Objectif :** Créer un petit jeu interactif où l'utilisateur doit deviner un nombre mystère.

// Générer un nombre aléatoire entre 1 et 100 au chargement.
const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Nombre secret :", secretNumber);

// Lors de la soumission du formulaire, comparer le nombre entré avec le nombre mystère.
document.getElementById("guess_form").addEventListener("submit", (event) => {
  event.preventDefault();
  const guess = parseInt(document.getElementById("guess").value);
  if (guess === secretNumber) {
    document.getElementById("message").textContent = "Bravo, vous avez devine le nombre !";
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "C'est plus !";
  } else {
    document.getElementById("message").textContent = "C'est moins !";
  }
});




// console.log("colorful");
