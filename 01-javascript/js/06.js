/*------------------------------------------
              LES FONCTIONS
------------------------------------------*/

/**
 * Déclarer une fonction
 * --------------------------
 * Les instructions ne seront executées que lorsque ma fonction sera appelée.
 * --------------------------
 */

 function bonjour () {
//-- Instruction js ---
//-- Instruction js ---
alert ('bonjour!');
//-- Instruction js ---
//-- Instruction js ----
 }

 /**
  * J'exécute ma fonction, et je déclenche ses instructions
  */
bonjour();

/**
  * Ici, notre fonction ditBonjour définit deux arguments. 
  * Au moment de l'exécuter nous affecterons une valeur à chaque argument.
  * Ainsi, prenom sera égal à 'hugo', et nom sera égal à 'liegeard'.
  */
function ditBonjour (prenom, nom) {

    console.log (prenom + ' ' + nom) //<-- il a ajouté un espace entre prenom et nom
    document.write (
        'Bonjour <strong>'
        + prenom
        + ' '
        + nom
        + '</strong> !<br>'
    )
}

ditBonjour ('Hugo', 'Liegeard');
ditBonjour ('Nia', 'Vitalis');

/*Exercice (que j'ai réussi. PS: il faut mettre le calcul quelque part, 
dans un document write ou un console log pour que ce dernier s'affiche)*/

function addition (nb1 , nb2) {
  console.log (nb1 + nb2)
};

addition (50, 22);








/*------------------------------------------
Exercice:

Créez une fonction permettant d'effectuer 
le calcul de la TVA d'un montant HT.
Sachant que le taux de la TVA peut varier:
5.5, 8.5, 10, 20.
Retourner le montant TTC
------------------------------------------*/

function tva (nb3, nb4) {
    var resultat= nb3 + (nb3 * (nb4/100))  //je pouvais aussi directement faire return nb3 + (nb3 * (nb4/100))
    return resultat
};

var tva1 = tva (210,5.5);
console.log (tva1);
var tva2 = tva (210,8.5);
console.log (tva2);
var tva3 = tva (210,10);
console.log (tva3);
var tva4 = tva (210,20);
console.log (tva4);

/*------------------------------------------
Exercice:

Créez une fonction permettant d'effectuer 
la conversion d'un montant de EURO en DOLLARS US

------------------------------------------*/


console.clear()

function dollars (euro) {
    return euro * 1.1035
};

function euro (dollar) {
    return dollar * 0.9061
};

var euro1 = dollars (210);
console.log (euro1);
var dollar1 = euro (120);
console.log (dollar1);


/*------------------------------------------
                CORRECTION 
------------------------------------------*/

function convertEurToUsd (montantEuro, tauxConversionUsd = 1.1035) {
    return montantEuro * tauxConversionUsd;
}

var montantEuro=20;
var montantUsd= convertEurToUsd (montantEur);
console.log(
    montantEur
        + '€ en dollars donne:'
        + montantUsd
        + '$'
)