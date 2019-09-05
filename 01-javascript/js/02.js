//---Déclarer un tableau indexé
var monTableau = [];
var myArray    = new Array;  //Autre notation, mais identique.

monTableau[0] = "Hugo";
monTableau[1] = "Rosemaël";
monTableau[2] = "Aurélie";
monTableau[3] = "Elodie";

console.log (monTableau);
console.log (monTableau[2]); // Aurélie
console.log (monTableau[3]); // Elodie

var nosPrenoms = [
"Nia",
"Catherine",
"Gaëlle",
"Cindy",
"Léna",
"Astrid" //-> NE PAS mettre de virgule au dernier élément.
];

console.log (nosPrenoms);

//---Créer un Objet en Javascript

var coordonnees = {
    // Propriété   :   Valeur   , 
    prenom         :   "hugo"     ,
    nom            :   "liegeard" ,
    age            :   29         , //si on voulait que 29 soit considéré comme un string, on aurait pu le mettre entre ""
    tel            :   "0783 97 15 15"
}

console.log(coordonnees);
console.log(coordonnees ['prenom']); /* ⚠ Pour déclarer le tableau Objet ↑ on utilise des accolades, 
                                     mais pour récupérer une propriété dans ce dernier, 
                                     on utilise les crochets à l'intérieur des parenthèses.*/

console.log(coordonnees.prenom); //← Mais ceci est l'ECRITURE A PRIVILEGIER.

//---Tableaux à dimensions
    /*Ici, j'ai un tableau à deux dimensions. 
    En effet, j'ai un grand tableau dans lequel se trouve deux tableau au même 'niveau' de profondeur, ou 'frères'.*/

        var annuaireDesApprenantes = [
            ["Nia", "Vitalis"],
            ["Angelique", "Jean-Noel"]
        ]
        console.log (annuaireDesApprenantes [0][0]); //pour récupérer 'Nia' (son adresse = grand tableau: [index:0], et à [l'index 0] de son petit tableau.
        console.log (annuaireDesApprenantes [1][0]); //pour récupérer 'Angelique' (son adresse = grand tableau: [index:1], et à [l'index 0] de son petit tableau.
        console.log (annuaireDesApprenantes);

        annuaireDesApprenantes = [
            {
                prenom : "Laureen",
                nom : "Labuthie"
            },
            {
                prenom : "Rosemael",
                nom: "Anthony"
            },
            {
                prenom : "Katharyna",
                nom : "Lucina"

            }
        ]
console.log (annuaireDesApprenantes);
console.log (annuaireDesApprenantes [1]["prenom"]);

console.log (annuaireDesApprenantes [0].prenom); //on peut aussi l'écrire comme cela, et c'est plus simple qu'encapsuler prenom dans des crochets.
console.log (annuaireDesApprenantes [0].nom);

console.log (annuaireDesApprenantes [1].prenom);
console.log (annuaireDesApprenantes [1].nom);

console.log (annuaireDesApprenantes [2].prenom);
console.log (annuaireDesApprenantes [2].nom);

var contacts = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        coordonnees: {
            adresse: {
                rue: 'Euvremont Gène',
                cp: '97110',
                ville: 'Pointe-à-Pitre',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'wf3@hl-media.fr',
            tel: {
                fixe: '0596 108 328',
                fax: '0596 108 632',
                port: '0783 97 15 15'
            }
        }
    },
    {
        prenom: 'Nia',
        nom: 'VITALIS',
        coordonnees: {
            adresse: {
                rue: 'Les Plaines',
                cp: '97139',
                ville: 'Les Abymes',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'nia971@gmail.com',
            tel: {
                fixe: '',
                fax: '',
                port: '0690 12 20 07'
            }
        }
    }
];
console.log( contacts );

console.log( contacts[0].coordonnees.adresse.pays.nom );
console.log( contacts[1].coordonnees.adresse.pays.code);

// Cette structure de données s'appelle le format : JSON !
// C'est le format le plus utilisé pour échanger des données.
// Il est facile à reconnaitre, ce sont des objets dans un tableau...


/* -----------------------------------
            ~ ~ CONSIGNE ~ ~
    
        Réaliser une structure JSON
        permettant de stocker des
        recettes de cuisine.
----------------------------------- */


var carbonara = [
    {ingredients : [ 
        "pâtes",
        "lardons", 
        "crème fraîche", 
        "basilic", 
        "poivre", 
        "sel", 
        "champignons" ]
    },
    {ustensiles : "cuillère en bois, casserole"},
    {tempsDeCuisson:
        {vitroCeramique: 
            {
            feuDoux: "20min",
            feuMoyen:"10min"
            },
        induction: 
            {
            feuDoux: "10min",
            feuMoyen:"5min"}
        }
    }
];
console.log(carbonara);

console.log(carbonara[2].tempsDeCuisson.vitroCeramique.feuDoux);
console.log(carbonara[2].tempsDeCuisson.induction.feuMoyen);


/* -----------------------------------
           Correction
----------------------------------- */


var recettes = [
    {
        nom: 'Tiramisu',
        categorie: 'Desserts',
        sousCategorie: 'Gateaux',
        difficulte: 'Facile',
        cout: 'Abordable',
        nbPersonnes: 8,
        specialite: 'Italien',
        cuisson: {
            preparation: 30,
            preparationUnite: 'minutes',
            duree: '',
            temperature: '',
            repos: 120,
            reposUnite: 'minutes',
            total: 150,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Sucre',
                quantite: 80,
                unite: 'g'
            },
            {
                nom: 'Mascarpone',
                quantite: 250,
                unite: 'g'
            },
            {
                nom: 'Café Expresso',
                quantite: 15,
                unite: 'cl'
            },
        ],
        ustensiles: [
            '1 Plat Rectangulaire',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
           {
               description: 'Séparer les blancs des jaunes...',
               photoUrl: 'https://recettes.fr/monetape.jpg'
           },
           {
                description: 'Mélanger les jaunes avec le sucre roux...',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
            {
                description: 'Ajouter le mascarpone au Fouet',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
        ]
    },
    {
        nom: 'Blaf',
        categorie: 'Plats',
        sousCategorie: 'Poissons',
        difficulte: 'Moyen',
        cout: 'Abordable',
        nbPersonnes: 4,
        specialite: 'Antillaise',
        cuisson: {
            preparation: 45,
            preparationUnite: 'minutes',
            duree: '30min',
            temperature: '',
            repos: 0,
            reposUnite: 'minutes',
            total: 75,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Poisson',
                quantite: 4,
                unite: ''
            },
            {
                nom: 'Figue',
                quantite: 12,
                unite: ''
            },
        ],
        ustensiles: [
            '1 Canarie',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
        ]
    }
];

/*

NOTA BENE : Un objet respecte toujours le format

{
propriété : valeur
}

Ou, la valeur peut-être de plusieurs types:
{
    unBooleen : true,
    unNombre : 18,
    unString : "Je suis un string",
    unObjet : {
        propriete : valeur
    },
    unTableau : [
        "Mathieu", "Marc", "Luc", "Hugo", "Jean"
    ]
}
*/

/*---------------------------------------------------------
            AJOUTER UN ELEMENT DANS UN TABLEAU
---------------------------------------------------------*/

var couleurs = ["rouge", "jaune", "vert"];
console.log (couleurs);

couleurs.push ("bleu")
console.log (couleurs );

couleurs.unshift ("Orange"); //Ajoute au début de.....
console.log (couleurs );

/*---------------------------------------------------------
            SORTIR UN ELEMENT DANS UN TABLEAU
---------------------------------------------------------*/

/*
La fonction pop() supprime le dernier
élément d'un tableau et quand on fait un console.log de ce dernier élément, 
la console nous retourne cet élément à la suite.
*/

var monDernierElement = couleurs.pop();
console.log (couleurs);
console.log (monDernierElement);

/*La même chose est possible avec le premier élément
en utilisant : shift ()
*
*
La fonction splice() vous permet de faire sortir un ou plusieurs éléments du tableau */