/*------------------------------------------
                  LE DOM
------------------------------------------*/

/*Le DOM est une interface de développement en JS pour HTML.
Grâce au DOM, je vais être en mesure d'accéder / modifier mon
code HTML.
 
L'objet "document" : c'est le point d'entrée vers mon contenue HTML.

Chaque page chargée dans mon navigateur a un objet "document"*/ 

// Comment puis-je faire pour récupérer les différentes informations de ma page HTML?

/*------------------------------------------------------------------------------\
|       ~     ~              document.getElementById              ~     ~       |
|                                                                               |
|  document.getElementById() est une fonction qui va permettre de récupérer     |
|  un élément HTML à partir de son identifiant unique : ID (que id, pas class)  |
\______________________________________________________________________________*/

const bonjour = document.getElementById ("Bonjour");
console.log (Bonjour);


/*------------------------------------------------------------------------------\
|       ~     ~          document.getElementsByClassName          ~     ~       |
|                                                                               |
|  document.getElementsByClassName() : C'est une fonction qui va permettre de   |
|  récupérer un ou plusieurs éléments (une liste) HTML à partir de leur classe. |
\______________________________________________________________________________*/

const contenu = document.getElementsByClassName ("contenu")
console.log (contenu);

//--Me renvoi un tableau JS avec mes éléments HTML.

/*------------------------------------------------------------------------------\
|       ~     ~          document.getElementsByTagName          ~     ~         |
|                                                                               |
|  document.getElementsByTagName() : C'est une fonction qui va permettre de     |
|  récupérer un ou plusieurs éléments (une liste) HTML à partir de leur balise. |
\______________________________________________________________________________*/

const h1 = document.getElementsByTagName ("h1");
console.log (h1);

/**
 * Nous avons également le querySelector :
 * https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
 */

console.log (document.querySelector ('#bonjour'));
console.log (document.querySelectorAll ('.contenu'));
console.log (document.querySelectorAll ("h1"));




