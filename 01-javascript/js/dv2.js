/* -- 
CONSIGNE : 

A partir du tableau "baseDeDonnees" fourni, vous devez mettre en place un système d'authentification. 
Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, 
et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue 
avec son nom et prénom (document.write); 

En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur. 
-- */

const baseDeDonnees = [
    { 'prenom': 'Hugo', 'nom': 'LIEGEARD', 'email': 'wf3@hl-media.fr', 'mdp': 'wf3' },
    { 'prenom': 'Rodrigue', 'nom': 'NOUEL', 'email': 'rodrigue@hl-media.fr', 'mdp': 'wf3' },
    { 'prenom': 'Nathanael', 'nom': 'ORDONNE', 'email': 'nathanael.d@hl-media.fr', 'mdp': 'wf3' }
];

console.log(baseDeDonnees[0]);

let tab = baseDeDonnees[0];
let tab2 = baseDeDonnees[1];
let tab3 = baseDeDonnees[2];


let emailut = prompt("votre email", "<votre email>");
let mdput = prompt("entrez votre mot de passe", "<mot de passe>")


if (emailut === tab[2].email && mdput === tab[3].mdp) {
    document.write("Bienvenue " + tab[0].prenom + " " + tab[1].nom + " !")
}
else { alert("Vos informations ne figurent pas dans notre base de données") }

//------------------

let emailut2 = prompt("votre email", "<votre email>");
let mdput2 = prompt("entrez votre mot de passe", "<mot de passe>");


if (emailut2 === tab2[2].email && mdput2 === tab2[3].email) {
    document.write("Bienvenue " + tab2[0].prenom + " " + tab2[1].nom + " !")
}
else { alert ("Vos informations ne figurent pas dans notre base de données") }

//------------------

let emailut3 = prompt("votre email", "<votre email>");
let mdput3 = prompt("entrez votre mot de passe", "<mot de passe>");

if (emailut3 === tab3[2].email && mdput3 === tab3[3].email) {
    document.write("Bienvenue " + tab3[0].prenom + " " + tab3[1].nom + " !")
}
else { alert("Vos informations ne figurent pas dans notre base de données") }