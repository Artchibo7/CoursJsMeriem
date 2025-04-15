// =======================================
// 🧱 STRUCTURE HTML ET SÉLECTION DES ÉLÉMENTS
// =======================================

// Sélection d'un seul élément HTML (le premier <div> trouvé dans le DOM)
console.log(document.querySelector("div"));

// Sélection de tous les éléments avec la classe "container" → retourne une NodeList
console.log(document.querySelectorAll(".container"));

// Stockage d’un élément avec la classe "container" dans une constante
const mydiv = document.querySelector(".container");

// Sélection de la première liste <ul> trouvée dans le DOM
const list = document.querySelector("ul");

// ❌ Ne fonctionne pas directement car `list` n'est pas un tableau (mais un élément <ul>)
// list.forEach((li) => console.log(li));

// ✅ Transformation en tableau (si nécessaire pour itérer sur les enfants par exemple)
Array.from(list);

// Nom du noeud HTML sélectionné (ex. "DIV")
console.log(mydiv.nodeName);

// =======================================
// ✏️ CONTENU HTML ET TEXTE
// =======================================

// Récupérer tout le contenu HTML interne (y compris les balises)
console.log(mydiv.innerHTML);

// Modifier dynamiquement le contenu HTML
mydiv.innerHTML = "<h1>Hello</h1>";

// Récupérer le texte visible de l’élément (respecte les espaces)
console.log(mydiv.innerText);

// Récupérer le texte brut (y compris les balises cachées)
console.log(mydiv.textContent);

// =======================================
// ⚙️ ATTRIBUTS
// =======================================

// Ajouter un attribut
mydiv.setAttribute("hidden", "hidden");

// Supprimer un attribut
mydiv.removeAttribute("hidden");

// Lire la valeur d’un attribut
console.log(mydiv.getAttribute("class"));

// =======================================
// 🎨 CLASSES CSS
// =======================================

// Ajouter une classe
mydiv.classList.add("hidden");

// Supprimer une classe
mydiv.classList.remove("hidden");

// Remplacer une classe par une autre
mydiv.classList.replace("hidden", "show");

// Vérifie si une classe est présente → retourne true ou false
console.log(mydiv.classList.contains("hidden"));

// Alterner une classe toutes les secondes
const myinterval = setInterval(() => {
  mydiv.classList.toggle("hidden");
}, 1000);

// Stopper l'alternance au bout de 5 secondes
setTimeout(() => {
  clearInterval(myinterval);
}, 5000);

// =======================================
// 🎨 STYLISATION DES ÉLÉMENTS
// =======================================

// Accéder aux styles inline
console.log(mydiv.style);

// Accéder aux styles calculés (appliqués via CSS ou hérités)
console.log(getComputedStyle(mydiv).fontSize);

// =======================================
// ➕ AJOUT/MODIFICATION D'ÉLÉMENTS
// =======================================

// Créer un nouvel élément <div>
const newdiv = document.createElement("div");
newdiv.textContent = "hello world";

// Ajouter l'élément à la fin de `mydiv`
mydiv.appendChild(newdiv);

// Autre méthode d’ajout (peut aussi ajouter du texte)
mydiv.append(newdiv);

// Ajouter au début du body
document.body.prepend(newdiv);

// Insérer avant ou après un élément spécifique
mydiv.insertAdjacentElement("beforebegin", newdiv); // avant mydiv
mydiv.insertAdjacentElement("afterbegin", newdiv); // à l’intérieur, au début

// =======================================
// 👨‍👧 RELATIONS PARENT/ENFANT
// =======================================

// Sélectionner tous les <li> dans une liste
list.querySelectorAll("li");

// Accéder aux enfants directs
console.log(list.children); // HTMLCollection
console.log(list.childNodes); // NodeList (inclut les textes et commentaires)

// Accéder au premier et dernier enfant
console.log(list.firstChild);
console.log(list.lastChild);

// Accéder au parent
console.log(list.parentNode); // peut être un noeud (incluant des commentaires)
console.log(list.parentElement); // renvoie uniquement un élément

// Accéder aux éléments frères (siblings)
console.log(list.nextElementSibling);
console.log(list.previousElementSibling);

// Vérifier si un élément est enfant d’un autre
console.log(list.contains(newdiv)); // true / false

// Supprimer un élément du DOM
list.remove();

// =======================================
// 🧠 ÉVÈNEMENTS
// =======================================

// Sélectionner un bouton
const btn = document.querySelector("button");
console.log(btn);

// Ajouter un écouteur d’événement sur le body pour la touche relâchée
document.body.addEventListener("keyup", (event) => {
  console.log(event); // objet événement
  console.log(event.altKey ? "alt" : "no alt"); // si Alt est pressée
  // Tu peux aussi ajouter ici : event.clientX / event.clientY pour la position souris
});
