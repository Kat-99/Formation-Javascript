//--⚠ Décomposer la consigne en plusieurs étapes

//--1. Création d'une fonction
function presentation () {

//--2. Demande à l'utilisateur son prénom via un prompt
    var prenom = prompt ("Quel est votre prénom ?", '<Le mien est Kat>'); // le <> est ce qui va s'afficher par défaut avant que l'utilisateur commence à taper
    console.log (prenom); // et ça va afficher ce que l'utilisateur entre, dans la console.

//--3. Je lui demande son age
    var age = parseInt (  //LES PROMPTS RETOURNENT DES STRINGS. 
                          //DONC POUR LE CONVERTIR EN NOMBRE IL FAUT FAIRE UN PARSEINT
    prompt ("Bonjour" + prenom + ", quel age as-tu?",'<Votre âge>')
    );
    console.log (age);
    console.log (typeof age);

//--4. Calculer l'année de naissance
    var objetDate = new Date ();
    var dateDeNaissance = objetDate.getFullYear()-age;
    alert ("Tu es donc né en " + dateDeNaissance);
//--5. Afficher le récapitulatif
    document.write ("Bonjour " + prenom + " tu as " + age + " ans !")
}

presentation ();