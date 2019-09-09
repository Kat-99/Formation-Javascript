/*------------------------------------------
              LES CONDITIONS
------------------------------------------*/

// var majoritelegalefr = 18;
// if (19 >= majoritelegalefr) {
//     /**
//      * Comme 19 est bien supérieur à 18 (majoritelegalefr);
//      * alors les instructions de ma conditions sont executées.
//      * Ce qu'il y a entre les accolades.
//      */
//     alert('Bienvenue!');
// } else if (14 >= majoritelegalefr) { //LE ELSE N'EST PAS OBLIGATOIRE

//     /**
//      * Comme 14 est bien inférieur à 18 (majoritelegalefr);
//      * alors les instructions ne sont pas executées.
//      */
//     alert('Bienvenue!'); // yaura rien
// } else { //LE ELSE N'EST PAS OBLIGATOIRE
//     alert("Va voir chez Google....")

// }

// /*------------------------------------------
//               Exercice
// Créer une fonction permettant de vérifier l'âge d'un visiteur (prompt)
// S'il a la majorité légale, alors je lui souhaite la bienvenue,
// Sinon, je fais une redirection sur Google après lui avoir signalé le soucis.
// ------------------------------------------*/

// function accesSite() {
//     var age = parseInt(
//         prompt("Veuillez entrer votre age", '<Votre âge>')
//     );
//     if (age >= majoritelegalefr) {
//         alert('Bienvenue!');
//     }
//     if (age < majoritelegalefr) {
//         alert('Tu es trop jeune pour visiter ce site, tu seras redirectionné sur Google');
//         window.location.href = "https://www.google.fr";
//     }
// }

// accesSite();

// /*------------------------------------------
//         Correction (autre méthode)
// ------------------------------------------*/

// const majoritelegalefr2 = 18;

// function monUtilisateurEstMajeur(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }

// }

// const ageSaisieParMonUtilisateur = parseInt(
//     prompt("Bonjour, Quel age avez-vous?", "<Saisissez votre age>")
// );

// if (monUtilisateurEstMajeur(ageSaisieParMonUtilisateur)) {
//     alert("Bienvenue sur mon site réservé aux majeurs !");
// } else {
//     alert('Vous devez être majeur pour accéder à ce site.');
//     document.location.href = "https://google.fr"; 
//--- ↑ est comme "windows.location.href"
//}

/* --------------------------------------------------------------------------------------------------
        ~ ~ LES OPERATEURS DE COMPARAISON ~ ~ 💥

L'Opérateur de comparaison "==" signifie : Egal à.
Il permet de vérifier que 2 variables sont identiques.

L'Opérateur de comparaison "===" signifie: Strictement 
égal à. Il va comparer la valeur, mais aussi le type !

if (14 == "14") {} = true          
if (14 === "14") {} = false --> parce que le type n'est pas le même (string vs number)
if (14 === 14) {} = true

L'opérateur " !=" : Différent de.
L'opérateur " !==": Strictement différent de.

if (12 != 14) {} = true          
if (12 !== "12") {} = true (oui, 12 est bien différent de '12) parce que le type n'est pas le même.

--------------------------------------------------------------------------------------------------- */


/* ----------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

function verification() {
    var emailut = prompt("veuillez entrer votre email", "<votre email>");
    var motdepasseut = prompt("veuillez entrer votre mot de passe", "<votre mot de passe>");
    if (emailut === email && motdepasseut === mdp) {
        alert("Bienvenue sur votre site")
    } else {
        alert("Erreur. Vous n'êtes pas reconnu dans notre base de données.")
    }
};
verification();

/*------------------------------------------
//                Correction
// ------------------------------------------*/

// -- 1. Demander à l'utilisateur son email / mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
const mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la BDD.

// If imbriqué...
if ( email === emailPrompt ) {
    if(mdp === mdpPrompt) {
        alert("Bienvenue " + emailPrompt + " !");
    }
}

// Une seule condition
if ( email === emailPrompt && mdp === mdpPrompt ) {
    // -- 3. Tous est ok, l'utilisateur est authentifié
    alert("Bienvenue " + emailPrompt + " !");
} else {
    // -- 4. Erreur au niveau de l'authentification
    alert("ATTENTION, email / mdp incorrect.");
}

//Avec les fonctions
function connexion( emailUser, mdpUser ) {
    if ( email === emailUser && mdp === mdpUser ) {
        return true;
    } else {
        return false;
    }
}

if ( connexion( emailPrompt, mdpPrompt ) ) {
    alert("Bienvenue " + emailPrompt + " !");
} else {
    alert("ATTENTION, email / mdp incorrect.");
}
