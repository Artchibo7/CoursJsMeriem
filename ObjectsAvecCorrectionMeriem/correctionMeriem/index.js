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

// 1. Tous les noms et prénoms
const nomsPrenoms = users.map((user) => `${user.prenom} ${user.nom}`);
console.log(nomsPrenoms);

// 2. Tous les emails

const emails = users.map((user) => user.email);
console.log(emails);

// 3. Rôle de chaque utilisateur
const roles = users.map((user) => user.role);
console.log(roles);

// 4. Nombre total d'users
const totalusers = users.length;
console.log(totalusers);

// 5. Nombre d'administrateurs
const nbAdmins = users.filter((user) => user.role === "administrateur").length;
console.log(nbAdmins);

// 6. users actifs
const usersActifs = users.filter((user) => user.estActif);
console.log(usersActifs);

// 7. Inscrits après le 15 janvier 2025
const apres15Janvier = users.filter(
  (user) => new Date(user.dateInscription) > new Date("2025-01-15")
);
console.log(apres15Janvier);

// 8. Noms complets des users avec employés
const avecEmployes = users
  .filter((user) => user.employees?.length > 0)
  .map((user) => `${user.prenom} ${user.nom}`);
console.log(avecEmployes);

// 9. Nombre d'users avec employés
const nbAvecEmployes = users.filter(
  (user) => user.employees?.length > 0
).length;
console.log(nbAvecEmployes);

// 10. Trouver Emilie
const emilie = users.find(
  (user) => user.email === "emilie.lemoine@example.com"
);
console.log(emilie);

// ✅ Niveau confirmé

// 11. Nombre total d’employés
const totalEmployes = users.reduce((acc, user) => {
  return acc + (user.employees ? user.employees.length : 0);
}, 0);
console.log("Total employés :", totalEmployes);

// 12. Nombre d’users par rôle
const usersParRole = users.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});
console.log("users par rôle :", usersParRole);

// 13. Nom complet, rôle, nombre d’employés
const resumeusers = users.map((user) => ({
  nomComplet: `${user.prenom} ${user.nom}`,
  role: user.role,
  nbEmployes: user.employees ? user.employees.length : 0,
}));
console.log("Résumé :", resumeusers);

// 14. Liste de tous les employés avec le nom complet du responsable
const listeEmployes = users.flatMap((user) => {
  return (
    user.employees?.map((emp) => ({
      nomEmploye: emp.name,
      description: emp.description,
      responsable: `${user.prenom} ${user.nom}`,
    })) || []
  );
});
console.log("Employés avec responsable :", listeEmployes);

// 🔥 Niveau avancé

// 15. Trier les users par date d’inscription (ancien -> récent)
const triDate = [...users].sort(
  (a, b) => new Date(a.dateInscription) - new Date(b.dateInscription)
);
//  tri par nom
const triName = [...users].sort((a, b) => a.nom.localeCompare(b.nom));
console.log("Tri par nom :", triName);

// 16. Objet résumé général
const resumeGlobal = {
  totalusers: users.length,
  totalActifs: users.filter((u) => u.estActif).length,
  totalInactifs: users.filter((u) => !u.estActif).length,
  totalEmployes: users.reduce(
    (acc, user) => acc + (user.employees?.length || 0),
    0
  ),
};
console.log("Résumé global :", resumeGlobal);

// 17. Noms des employés des administrateurs
const employesAdmins = users
  .filter((user) => user.role === "administrateur")
  .flatMap((admin) => admin.employees?.map((e) => e.name) || []);
console.log("Employés des admins :", employesAdmins);

// 18. users triés par nombre d’employés
const triParEmployes = [...users]
  .map((user) => ({
    nomComplet: `${user.prenom} ${user.nom}`,
    role: user.role,
    nbEmployes: user.employees?.length || 0,
  }))
  .sort((a, b) => b.nbEmployes - a.nbEmployes);
console.log("Tri par nb employés :", triParEmployes);

// 19. ajouter un employe à l'utilisateur qui a l'id 4
const usermiag = user.map((user) => {
  if (user.id == 4) {
    const newemploye = {
      id: 4,
      nom: "Lemoine",
      prenom: "Emilie",
    };
    const newemplyes = user?.employees ?? [];
    return { ...user, employes: [...newemplyes, newemploye] };
  } else {
    return user;
  }
});
// 20  y'a til aumoins un utilisateur actif ?

const auMoinsUnInactif = utilisateurs.some((user) => !user.estActif);
console.log("Y a-t-il au moins un utilisateur inactif ?", auMoinsUnInactif);

// 21. Utilisateurs avec un nom de famille commençant par "L"
const utilisateursL = utilisateurs.filter((user) => user.nom.startsWith("L"));

//  22 Tous les utilisateurs sont-ils actifs ?
const tousActifs = utilisateurs.every((user) => user.estActif);
console.log("Tous les utilisateurs sont-ils actifs ?", tousActifs);
