/*------------------------------------------
              LES BOUCLES
------------------------------------------*/

//--1. Boucle for

for (let i=0 ; i<=10 ; i++) // si on voulait incrémenter de deux, on aurait pu écrire direct i+2.
{
    document.write ('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

/**
 * Compréhension: 
 * (Pour i=0 ; Tant que i est strictement inférieur ou égal à 10; alors j'incrémente de 1 en 1)
*/

/* ⚠ let est la nouvelle appellation de var avec ECMA 6. var est amené à disparaître donc
vaut mieux prendre les bonnes habitudes dès maintenant. */

document.write ('<hr>'); // <--- <hr> permet de faire une ligne horizontale (vient du html)


//--2. Boucle let-while 

let j = 0;
while (j <= 10) {
    document.write ('<p>Instruction executée : <strong>' + j + '</strong></p>');
    j++
}
/**
 * Compréhension:
 * Tant que j est inférieur à 10;
 * j'exécute ma boucle {
 * qui consiste à écrire ceci dans le document
 * avec j incrémenté de 1 à chaque fois (PS: Pour cette boucle là, on met l'incrémentation après 
   le document write parce que sinon javascript va déjà appliquer le j++ à ma boucle avant
   l'affichage dans le document (mes nombre commenceraient donc à 1, j ayant prit la valeur de 1) 
 * }
*/

// ***************JAVASCRIPT NE VA PAS FINIR D'EXECUTER LE CODE TANT QU'IL N'EN A PAS FINI AVEC UNE BOUCLE.

/*------------------------------------------
                 EXERCICE
------------------------------------------*/

const Prenoms = ["Jean", "Marc", "Matthieu", "Paul", "Luc", "Hugo", "Jacques"];

/**
 * CONSIGNE / Grâce à une boucle FOR ou autre, affichez la liste des prénoms du tableau ci-dessus
 * dans la console, ou sur votre page.
 */

for(let k = 0; k < Prenoms.length; k++)
{
     document.write('<p>Instruction executée : <strong>' + Prenoms[k] + '</strong></p>');
}

/*------------------------------------------
                 CORRECTION
------------------------------------------*/

//Manuellement dans la console

console.log (Prenoms [0]);
console.log (Prenoms [1]);
console.log (Prenoms [2]);
console.log (Prenoms [3]);
console.log (Prenoms [4]);
console.log (Prenoms [5]);
console.log (Prenoms [6]);
console.log ("--------------------")

//Automatique avec une boucle

for (let index=0; index <=6 ; index++ ) {
    console.log (Prenoms [ index] );
}

//Variante, calcul automatique de la dimension du tableau.
console.log ('-------------------')

for (let index = 0; index < Prenoms.length; index++) {
    console.log (Prenoms [index]);
}

/*------------------------------------------
           EXERCICE : ADDITIONS
------------------------------------------*/

/*CONSIGNE: Créer un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
Faire une boucle qui permet d'additionner toutes ces valeurs.

1. Prendre chaque élément séparément
2. Additonner le total  */

const nombres = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

//--1. Déclarer une variable permettant de garder en memoire la somme
let resultat = 0; 

//--2. Créer une boucle permettant d'attionner les nombres
for (let nb = 0; nb < nombres.length; nb++)
{
    //On sait que i prendra successivement les valeurs de 0...10
    //Comment additionner les valeurs?
    resultat = (nombres [nb] + resultat);
    resultat += nombres [nb] //il va rajouter tout en incrémentant à la valeur de nb, le résultat
}
console.log (nombres);

/*------------------------------------------
      EXERCICE : VOS MEILLEURS CHOIX
------------------------------------------*/

    /*
    Crée un tableau qui contetient 3 nom d'acteurs
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

    Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
    */

let acteurs = ["Kim Jae Wook", "Yoo Seung Ho" , "Ji Chang Wook"];

let rang = 1

for (let act = 0; act <3; act++)

{console.log ("Le numéro "+ rang++ + " est " + acteurs [act])
}


console.log ("-----------")



let rang2 = ["premier", "deuxième", "troisème"]

for (let act = 0; act <3; act++)

{console.log ("Le " + rang2 [act] + " est " + acteurs [act])} //une même boucle peut être utilisée pour plusieurs tableau.
                                                              //donc act va s'appliquer et pour le premier et le deuxième tableau.



console.log ("-----------")


/*------------------------------------------
         EXERCICE : GETMONTH
------------------------------------------*/

/* CONSIGNE:
    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/

let mois = (new Date).getMonth ()

months = ["Janvier", "Février","Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

console.log (months [mois]) //Je veux récupérer dans 'months' la valeur du mois qui se trouve à l'index 'mois' (parce que getmonth c'est un index).