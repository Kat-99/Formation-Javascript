alert('Mon fichier JS fonctionne !');

// Deux slash pour faire un commentaire uniligne

/*
Et entre slash étoile et étole slash, 
on peut faire un commentaire 
sur plusieurs lignes.
*/

// 1 : Déclarer une variable JS
var prenom;

// 2 : Affecter une valeur à la variable "prenom"
prenom = "Katharyna";

// 3 : Afficher la valeur de ma variable dans la console

console.log(prenom);

/*console.log (Prenom); Uncaught ReferenceError: Prenom is not defined. 
Car javascript est sensible à la casse. Si on a déclaré sans majuscule la variable, 
il faut la déclarer aussi sans majuscule dans la console, parce que c'est ainsi que la variable a été déclarée.
*/


/* <:>:<:>:<:>:<:>:<:>:<:><:>:<:>:<:>:<:>:<:>:<:><:>:<:>:<:>:<:>:<:>:<:><:>
   ------------------------LES TYPES DE VARIABLES--------------------------
   <:>:<:>:<:>:<:>:<:>:<:><:>:<:>:<:>:<:>:<:>:<:><:>:<:>:<:>:<:>:<:>:<:><:>
*/

//Typeof me permet de connaître le type de la valeur de ma variable.
console.log(typeof prenom); //->Ma variable "prenom" contient une chaîne de caractère (string)...c'est du texte quoi.

var age = 40 //il est aussi possible d'affecter directement une valeur à la variable, quand on le déclare. 

// Connaître son type 
console.log (age);
console.log (typeof age);


// Les variables de type FLOAT (chiffre a virgule)
var uneDecimale= -2.984; /*il est possible de mettre une majuscule au début de chaque mot pour faciliter la lecture, 
                         vu que, on ne peut pas mettre d'espace.*/
console.log (uneDecimale);
console.log (typeof uneDecimale)

// Les Bouléens (vrai/faux)

var unBooleen = false;// or true
console.log (unBooleen);
console.log (typeof unBooleen);

//---Les constantes----

/*La déclaration "const" me permet de créer
une constante accessible UNIQUEMENT en lecture.
Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures.
*/

const host = "localhost";
const user = "root";
const password = "mysql";

/*Je ne peux pas faire cela --> const user = "hugo";
sinon, voici ce qu'on aura comme résultat : Uncaught TypeError: Assignement to constant variable.
*/

var unNombre = "24";
console.log (unNombre);
console.log (typeof unNombre); /*Petite subtilité, la variable "unNombre" ici de type "string" 
                               à cause des quotations marks au moment de l'afectation*/


//Pour convertir un nombre entier (Integer -> Int)
unNombre = parseInt (unNombre);
console.log (unNombre);
console.log (typeof unNombre);

//Pour convertir un nombre à virgule (appelé Float)
unNombre = "12.55";
unNombre = parseFloat (unNombre);
console.log (unNombre);
console.log (typeof unNombre)

//Pour convertir un nombre entier ou float en string.
unNombre = 10;
var unString = unNombre.toString();
console.log = (unString);
console.log = (typeof unString);













/*------------------------------------------------------------------------------\
|       ~     ~              LA PORTEE DES VARIABLES              ~     ~       |
|                                                                               |
|  Les variables déclarées directement à la racine du fichier JS sont appelées: |
|  variables GLOBALES.                                                          |
|                                                                               |
|  Elles sont disponibles dans l'ensemble de votre document, y coompris dans    |
|  les fonctions.                                                               |
|                                                                               |
|  ###                                                                          |
|                                                                               |
|  Les variables déclarées à l'intérieur d'une fonction sont appelées:          |
|  variable LOCALES.                                                            |
|                                                                               |
|  Elles sont disponibles UNIQUEMENT dans le scope de la fonction               |
|                                                                               |
\______________________________________________________________________________*/


















