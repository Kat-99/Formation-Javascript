/*------------------------------------------
       LES OPERATEURS ARITHMETIQUES
------------------------------------------*/

var nb1,nb2, resultat;   //On peut déclarer plusieurs variables en même temps en les séparants avec des virgules.

nb1 = 10;
nb2 = 5;

// ## ~ L'addition ~ ## //

resultat = nb1 + nb2;  /*n'oublions pas que j'ai déjà déclaré résultat en haut, 
                         donc c'est pour cela que je n'ai pas de var au dessus*/

console.log ("L'addition de nb1 et nb2 = " + resultat); 
/*javascript sait faire la différence entre les additions de nombres et les concaténations. 
Il se base sur le fait qu'on ne peux pas additionner un string et des nombres, donc forcément, il
se dit que c'est une concaténation. Or il peut additionner des nombres, donc il sait que c'est un calcul. */

// ## ~ La soustraction ~ ## //

resultat = nb1 - nb2; 
console.log ("La soustraction de nb1 et nb2 = " + resultat); 

// ## ~ La multiplication ~ ## //

resultat = nb1 * nb2; 
console.log ("La multiplication de nb1 et nb2 = " + resultat); 

// ## ~ La multiplication ~ ## //

resultat = nb1 / nb2; 
console.log ("La division de nb1 et nb2 = " + resultat); 

// ## ~ La modulo (le reste de la division) ~ ## //

resultat = nb1 % nb2; 
console.log ("La soustraction de nb1 et nb2 = " + resultat); 

