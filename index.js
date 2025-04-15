const users = [
  {
    id: 1,
    nom: "Dupont",
    prenom: "Claire",
    email: "claire.dupont@example.com",
    motDePasse: "$2a$10$abc123...",
    role: "administrateur",
    dateInscription: "2025-01-10T09:30:00Z",
    estActif: true,
    employees: [
      { id: 1, name: "Jean", description: "Développeur Front-end" },
      { id: 2, name: "Luc", description: "Designer UI" },
    ],
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Julien",
    email: "julien.martin@example.com",
    motDePasse: "$2a$10$def456...",
    role: "utilisateur",
    dateInscription: "2025-01-12T14:45:00Z",
    estActif: true,
    employees: [
      { id: 3, name: "Alice", description: "Assistante RH" },
      { id: 4, name: "Sophie", description: "Secrétaire" },
    ],
  },
  {
    id: 3,
    nom: "Lemoine",
    prenom: "Émilie",
    email: "emilie.lemoine@example.com",
    motDePasse: "$2a$10$ghi789...",
    role: "modérateur",
    dateInscription: "2025-01-15T10:00:00Z",
    estActif: false,
    employees: [{ id: 5, name: "Maxime", description: "Développeur Back-end" }],
  },
  {
    id: 4,
    nom: "Rousseau",
    prenom: "Antoine",
    email: "antoine.rousseau@example.com",
    motDePasse: "$2a$10$jkl000...",
    role: "utilisateur",
    dateInscription: "2025-01-17T08:20:00Z",
    estActif: true,
  },
  {
    id: 5,
    nom: "Petit",
    prenom: "Camille",
    email: "camille.petit@example.com",
    motDePasse: "$2a$10$mno111...",
    role: "administrateur",
    dateInscription: "2025-01-18T12:15:00Z",
    estActif: true,
  },
  {
    id: 6,
    nom: "Moreau",
    prenom: "Lucas",
    email: "lucas.moreau@example.com",
    motDePasse: "$2a$10$pqr222...",
    role: "utilisateur",
    dateInscription: "2025-01-20T11:00:00Z",
    estActif: false,
  },
  {
    id: 7,
    nom: "Fournier",
    prenom: "Chloé",
    email: "chloe.fournier@example.com",
    motDePasse: "$2a$10$stu333...",
    role: "modérateur",
    dateInscription: "2025-01-21T15:45:00Z",
    estActif: true,
  },
  {
    id: 8,
    nom: "Girard",
    prenom: "Nicolas",
    email: "nicolas.girard@example.com",
    motDePasse: "$2a$10$vwx444...",
    role: "utilisateur",
    dateInscription: "2025-01-22T09:10:00Z",
    estActif: false,
  },
  {
    id: 9,
    nom: "Benoît",
    prenom: "Sarah",
    email: "sarah.benoit@example.com",
    motDePasse: "$2a$10$yz0123...",
    role: "utilisateur",
    dateInscription: "2025-01-23T14:30:00Z",
    estActif: true,
  },
  {
    id: 10,
    nom: "Masson",
    prenom: "Théo",
    email: "theo.masson@example.com",
    motDePasse: "$2a$10$456abc...",
    role: "utilisateur",
    dateInscription: "2025-01-24T10:00:00Z",
    estActif: true,
  },
];

// 1. Afficher tous les noms et prénoms des utilisateurs.
  const nomsEtPrenoms = users.map(user => `${user.prenom} ${user.nom}`);
  // console.log(nomsEtPrenoms);

// 2. Lister tous les emails des utilisateurs.
  const emails = users.map(user => user.email);
  // console.log(emails);

// 3. Afficher le rôle de chaque utilisateur.
const roles = users.map(user => user.role);
// console.log(roles);

// 4. Combien y a-t-il d'utilisateurs au total ?
const usersAll = users.map(user => user.lenght);
// console.log(usersAll)

// 5. Combien d'utilisateurs sont administrateurs ?
const userAdmin = users.filter(user => user.role === "administrateur");
// console.log(userAdmin)

// 6. Lister les utilisateurs qui sont actifs.
const userActif = users.filter(user => user.estActif);
// console.log(userActif);

// 7. Trouver tous les utilisateurs inscrits après le 15 janvier 2025.
const usersInscription = users.filter(user => user.dateInscription > "2025-01-15");
// console.log(usersInscription);

// 8. Afficher les noms complets des utilisateurs ayant des employés.
// 9. Combien d’utilisateurs ont au moins un employé ?
const usersEmployes = users.filter(user => user.employees?.length > 0)
.map(user => `${user.prenom} ${user.nom}`);
// console.log(usersEmployes);


// 10. Trouver l'utilisateur dont l’email est emilie.lemoine@example.com.
const userEmail = users.filter(user => user.email === "emilie.lemoine@example.com");
// console.log(userEmail);

// 11. Afficher le nombre total d’employés.
//reduce() est une méthode des tableaux qui sert à réduire un tableau à une seule valeur (somme, moyenne, produit, tableau fusionné, etc.).
const employes = users.reduce((total, user) => total + (user.employees?.length ?? 0), 0);
// console.log(employes);


// 12. Afficher le nombre d’utilisateurs par rôle.
const userRole = {}; // On commence avec un objet vide

users.forEach(user => {
  const role = user.role;

  // Si ce rôle existe déjà dans l'objet, on l'incrémente
  if (userRole[role]) {
    userRole[role]++;
  } else {
    // Sinon, on le crée avec la valeur 1
    userRole[role] = 1;
  }
});

// console.log(userRole);

// 13. Créer un tableau contenant pour chaque utilisateur : nom complet, rôle, nombre d’employés.
const userInfo = users.map(user => {
  return {
    nom: `${user.prenom} ${user.nom}`,
    role: user.role,
    employes: user.employees?.length ?? 0,
  };
});
// console.log(userInfo); //chatGpt!

// 14. Afficher une liste de tous les employés avec le nom complet de leur responsable.
const allEmployes = [];

users.forEach(user => {
  if (user.employees && user.employees.length > 0) {
    user.employees.forEach(employe => {
      allEmployes.push({
        nomEmploye: employe.name,
        description: employe.description,
        responsable: `${user.prenom} ${user.nom}`
      });
    });
  }
});

// console.log(allEmployes);


// **15. Trier les utilisateurs par date d’inscription (du plus ancien au plus récent).
const usersInscriptions = users.sort((a, b) => new Date(a.dateInscription) - new Date(b.dateInscription));
// console.log(usersInscriptions);

const usersInscriptions1 = users.sort((a, b) => new Date(b.dateInscription) - new Date(a.dateInscription));
// console.log(usersInscriptions1);

// **15. Trier les utilisateurs par nom.
// a.nom.localeCompare(b.nom) compare deux chaînes de caractères (ici des noms), en tenant compte des accents, de la casse (majuscules/minuscules), et de l’ordre alphabétique selon la langue.
const userByName = users.sort((a, b) => a.nom.localeCompare(b.nom));
// console.log(userByName);

// 16. Créer un objet de résumé avec les clés : totalUtilisateurs, totalActifs, totalInactifs, totalEmployes.


// 17. Créer un tableau contenant uniquement les noms des employés des administrateurs.
const employesNameAdmin = users.filter(user => user.role === "administrateur").map(user => user.employees?.map(employe => employe.name));
console.log(employesNameAdmin);
// 18. Créer un tableau trié par nombre d’employés, avec pour chaque utilisateur : nom complet, rôle, nombre d’employés.

// 19. Y a-t-il au moins un utilisateur inactif ? (utiliser some)
// 20. Tous les utilisateurs sont-ils actifs ? (utiliser every)
// 21. Ajouter un employé à l'utilisateur dont l'id est 4 (Rousseau Antoine).
