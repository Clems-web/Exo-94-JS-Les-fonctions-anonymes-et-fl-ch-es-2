let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let body = document.getElementById("boy");
let creaPara = document.createElement("p");

let maFonction = argument => {
    creaPara.innerHTML += argument + "<br>";
    body.prepend(creaPara);
}

let tabExposant = tableauUn.map(item => item**item);
maFonction(tabExposant);

let tabMultiply = tableauUn.map(item => item*10);
maFonction(tabMultiply);

let tabDivide = tableauUn.map(item => (( item + 2 ) / 23));
maFonction(tabDivide);

let tableauUnFiltrer = tableauUn.filter(item => item > 2);
maFonction(tableauUnFiltrer);

let tableauUnFiltrer2 = tableauUn.filter(item => !(item % 2));
maFonction(tableauUnFiltrer2);

let tableauUnFiltrer3 = tableauUn.filter(item => ((item*3) > 10));
maFonction(tableauUnFiltrer3);

let tabLength = tableauDeux.map(item => item.length);
maFonction(tabLength);

let tabValEtLength = tableauDeux.map(item => "l'élement " + item + " a une length de " + item.length);
maFonction(tabValEtLength);

let tabConcatene = tableauDeux.map(item => item + item);
maFonction(tabConcatene);

let tableauDeuxFiltrer1 = tableauDeux.filter(item => item.length > 4);
maFonction(tableauDeuxFiltrer1);

let tableauDeuxFiltrer2 = tableauDeux.filter(item => !(item.length % 2));
maFonction(tableauDeuxFiltrer2);

let tableauDeuxFiltrer3 = tableauDeux.filter(item => (item.length - 3) > 10);
maFonction(tableauDeuxFiltrer3);







