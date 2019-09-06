/*------------------------------------------
       INCREMENTATION & DECREMENTATION
------------------------------------------*/

// ## ~ INCREMENTATION ~ ## //

var nb1 = 1;
nb1 = nb1 + 1;
//Ecriture simplifiée (la même chose que nb1 = nb1 + 1;)
nb1 ++; //(même-s'il y a deux ++, l'incrément est de 1 à chaque fois)

nb1= 1; //==> comme précédemment on a fait des calcules avec nb1, là on lui a réattribué sa valeur initiale.
nb1= nb1 + 2;
//Ecriture simplifiée 
nb1+=2; //J'ajoute +2 à nb1 identique à nb1 = nb1 + 2
nb1+=5; //J'ajoute +2 à nb1 identique à nb1 = nb1 + 5

// ## ~ DECREMENTATION ~ ## //

nb1= 1; //==> comme précédemment on a fait des calcules avec nb1, là on lui a réattribué sa valeur initiale.
nb1= nb1 - 1;
//Ecriture simplifiée (la même chose que nb1 = nb1 + 1;)
nb1--; //(même-s'il y a deux ++, l'incrément est de 1 à chaque fois)

nb1= 1; //==> comme précédemment on a fait des calcules avec nb1, là on lui a réattribué sa valeur initiale.
nb1=nb1 - 2;
//Ecriture simplifiée 
nb1-=2; //J'enlève -2 à nb1 identique à nb1 = nb1 - 2
nb1-=5; //J'enlève -2 à nb1 identique à nb1 = nb1 - 5

// ## ~ SUBTILITE ~ ## //

/*Pour afficher directectement le résultat de l'incrémentation dans la console, 
on doit faire console.log (++nb1), si on fait console.log (nb1++), la console va
d'abord nous afficher la valeur initial de nb1 sans incrément; parce que javascript 
compte faire l'incrément après, à la ligne du dessous. Et en effet, l'incrément s'affichera
à la ligne suivante. */

