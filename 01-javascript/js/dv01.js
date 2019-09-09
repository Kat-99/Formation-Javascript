function presentation() {
    var prenom = prompt("votre prenom");
    document.write(
        'Bonjour'
        + prenom
        + ', quel age as-tu?'
    )
    var age = prompt("age");
    var date = new Date ();
    document.write(
        'Tu es donc né en'
        +
        date.getFullYear()
        -
        age
    )
document.write (
    'Bonjour'
    +
    prenom
    +
    ', tu as'
    +
    age
    +
    ' !'
)
}

