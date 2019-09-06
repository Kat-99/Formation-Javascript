var debutDePhrase =  "Aujourd'hui "; //on peut aussi écrire 'Aujourd\'hui', un slash pour ne pas que l'éditeur 
var dateDuJour    =  new Date ();   //pense que l'apostrophe est la fermeture des quotes, et du coup le hui 
var suiteDePhrase =  ", sont présentes:"; //ne serait pas pris en compte.
var nbApprenantes = 14;
var finDePhrase   = "apprenantes.<br>";





/**
 * Nous souhaitons maintenant, grâce à la concaténation
 * afficher le tout en une phrase sur notre page !
 */

 
document.write(
     debutDePhrase + dateDuJour.getDate()
                   + '/'
                   +(dateDuJour.getMonth() + 1)  // +1 parce que javascript considère janvier comme étant le mois 0,
                   + '/'                         //     ↳(donc ça donnerait 8 pour septembre), donc il faut rajouter +1,
                   + dateDuJour.getFullYear()    //     pour avoir le vrai numéro du mois.
                   + suiteDePhrase
                   + nbApprenantes
                   + finDePhrase
);

/*new Date est un objet de javascript, avec ses fonctions à notre disposition. 
Les objets avec des accolades sont ceux *que nous créons nous même*
*/

/**
  * Ici, notre variable dateDuJour nous donne accès aux fonctions de l'objet date.
  * Grâce au point '.' je peux utiliser ces fonctions.
*/

