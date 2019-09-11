/*------------------------------------------
        LA MANIPULATION DES CONTENUS
------------------------------------------*/

//3 Façons de créer des fonctions: 

//1- Création d'une fonction 'l'

function l(e) {
    console.log (e);
}

l("toto");

//2- Identique, sauf que la fonction est stockée dans une variable l

l = function (e) {
    console.log (e);
}


//3- Identique, mais avec des fonctions fléchées ECMA 6 (plus simple) :

    l = e => console.log(e); // e est le paramètre

    // s'il y a plusieurs paramètres, on rajoute les parenthèses:

    k = (e, f, g) => console.log(e,f,g);

    //s'il y a aucun paramètre, on écrit cela comme cela:

    j = () => console.log;


//Je souhaite récupérer mon lien google.
const google = document.getElementById ("google");

l (google); // on a appelé la première fonction

//Maintenant, je souhaite accéder aux informations de ce lien.

    // -- A : le lien vers lequel pointe la balise   
    l (google.href);

    //--B : L'ID de la balise
    l (google.id);

    //--C: La classe de la balise
    l (google.className);

    //--Comment fair pour modifier ce texte ...?
    google.textContent = "Mon lien google";
    l (google.textContent);


/*------------------------------------------
       AJOUTER UN ELEMENT DANS MA PAGE
------------------------------------------*/

//Je crée un élément span que je stocke dans ma constante.
const span = document.createElement ('span') //Créer n'importe quel type d'émément html

//Je veux donner un ID
span.id = 'monSpan'

//Donner du texte
span.textContent = "mon jolie texte en js";

//J'ai placé à l'intérieur de la balise google mon span.
google.appendChild (span);


/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

const input = document.createElement('input')

input.id = 'moninput';

//--Ajouter le champs input dans le <body> du document.
document.body.appendChild(input)

//--Trouver la solution pour récupérer la saisie de l'utilisateur
function afficherLaSaisie () { //-->la fonction permet d'afficher la valeur saisie du champs input
alert (input.value) // value est ce qu'il y a dans l'input.
}

input.addEventListener ('input', afficherLaSaisie) //--permet de déclarer un écouteur d'événements sur le champ input (c'est le .addEventListener qui fait cela)

/* Compréhension:
 * lorsqu'il va écouter les événements se passant dans l'input 
 * il va récupérer ce qu'il y a là-dedans et effectuer la fonction
 * qui consiste à l'afficher dans une alerte.
 */


/* ------------------------------------------------------------------------------
|                                      EXERCICE
|  En partant du travail déjà réalisé sur la page.
|  Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
|  "Titre de mon Article".
|  Dans cette balise, vous créerez un lien vers une url de votre choix.
|
|  C'est le lien qu'on met en h1
|  BONUS : Ce lien sera de couleur Rouge et non souligné.
------------------------------------------------------------------------------- */

const titre1 = document.createElement ("h1");
const lien = document.createElement ("a");

lien.textContent = "Titre de mon article";
lien.href = "https://www.swarovski.com/fr-FR/c-04/Categories/Decorations/"

titre1.appendChild (lien) //Matryoshka : On place d'abord le lien dans la balise
document.body.appendChild (titre1) //Puis le le titre lui même on le met dans le body (pour l'afficher sur la page)

lien.style.color = "red";
lien.textDecoration = "none";

