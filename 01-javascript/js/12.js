/* -------------------------------------------------------------\
|                       LES EVENEMENT                           |
|_______________________________________________________________|

Les événements vont me permettre de déclencher une fonction ; 
c'est à dire, une série d'instruction; suite à une action de  
mon utilisateur.                           
OBJECTIFS: Être en mesure de capturer ces événements afin
d'exécuter une fonction.

Les Evenements : MOUSE (Souris)

    click      : au clic;
    dblclick   : au double clic;
    mouseenter : la souris passe au dessus d'un élément;
    mouseleave : la souris sors de l'élément;
    mouseover  : au passage de la souris;

Les Evenements : KEYBOARD (Clavier)

    keydown    : lorsqu'une touche du clavier est enfoncé;
    key up     : lorsqu'une touche du clavier est relachée;

Les Evenements : WINDOW ( Fenêtre)

    scroll     : défilement de la fenêtre;
    resize     : redimensionnement de la fenêtre;
    
Les Evenements : FORM ( Formulaire)

    change     : se produit quand il y a du changement, une entrée dans les <input>, <select> et <textarea>;
    submit     : se produit à l'envoi (soumisssion) du formulaire;
    input      : qui capte la saisie d'un utilisateur sur le champ <input>

########################## LES ECOUTEURS D'EVENEMENT ##########################

Pour attacher un événement à un élément, ou autrement dit,
pour déclarer un écouteur d'événement qui se chargera de
déclencher une fonction, je vais utiliser la syntaxe suivante:
*/

const p = document.getElementById ('monParagraphe');

function changerLaCouleurEnRouge () {
    p.style.color ="red";
}

function changerLaCouleurEnNoir () {
    p.style.color ="black";
}

//p.addEventListener ('mouseover', changerLaCouleurEnRouge);

p.addEventListener ('mouseover', changerLaCouleurEnRouge);
p.addEventListener ('mouseleave', changerLaCouleurEnNoir);

