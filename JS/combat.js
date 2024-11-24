class colisée { // Cree class  aves nom, points de vie, attack, precision    //
    constructor(name, health, attack, precision) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.precision = precision;
        
    }

}
//  crée combattant et lion   //
const warrior = new colisée("Warrior", 12, 2, 0.5);
const lion = new colisée("Lion", 15, 2, 0.5);


//  function pour precision pour chacun   //
function hitChancee(combattant) {
    let hitChance = Math.random(); //   random number  //
     return hitChance < combattant.precision;  //  retourner la precision du combattant   //
}


//    boucle du combat //
while (warrior.health > 0 && lion.health > 0) { //  combat continu jusqua ce que lion ou warrior auront 0 points de vie   //
    console.log("Combat commence!") //console pour afficher     //
    

     //   si la precision du lion est inf du 0.5, il attack  //
    if (hitChancee(lion)) {
        
        console.log("Lion attack");
        warrior.health -= lion.attack
        console.log(warrior.health + ' Points de vies de warrior' );

    } else { //  si plus, il rate   //
        console.log("Lion rater");
    }
    //   Meme chose pour Warrior  //
    if (hitChancee(warrior)) {
        console.log("Warrior attack");
        lion.health -= warrior.attack
        console.log(lion.health + ' Points de vies de lion');
    }  else {
        console.log("Warrior rater");
    }
    //    Si warrior a 0 points de vie il meurt //
    if (warrior.health <= 0) {
        console.log("Lion a gagner")
        break
    }
    //  Meme chose mais lion il meurt   //
    if (lion.health <= 0) {
        console.log("Warrior a gagner")
        break
    }
}




/*const animal = 'cat';
var color = 'red';
let number = 20;

switch(animal) {
    case "dog" :
        console.log("Its dog");
        break
    case "cat":
        console.log("Its cat");
        break
    
        default:
        console.log("error");
}

switch(color) {
    case "white" :
        console.log("Its white");
        break
    case "cat":
        console.log("Its blue");
        break
    case "red":
        console.log("Its red");
        break
    
        default:
        console.log("error");
}

if (animal === "dog") {
    console.log("yes");
} else {
    console.log("no");
}

const numbers = number / 2;
console.log(numbers);


let i = 0

while (i <= 0) {
    console.log(i);
    i++
}

for (let i = 0; i <= 5; i++) {
    console.log(i);
    console.log("your number is");
    
}

const iphones = [300, 4, 5, 6, 7, 8, 9, 10, 11,12, 13, 14, 15];

iphones.forEach(function(iphone) {
    console.log(iphone);
})*/


//Pratique

/*
const personageName = "Alex";
let personageMoney = 5;
let personageFruits = 0;

let buyFruits = 5;

let fruits = 5;
let cost = 2;



function buy() {
    
    if (personageMoney < 1) {
        console.log("Insuffisant de l'argent");
        return;

    }

    (cost * buyFruits) - personageMoney;

    fruits -= buyFruits;

    personageFruits += buyFruits;

}




while (fruits) {
    
    buy();
    
    
    if (fruits > 0) {
        console.log("on a encore en stock " + fruits + " fruits");
            break
    }
    
    else if (fruits <= 0) {
    
    console.log("rupture de stock!");
        break
        
    }

    buy();

}


console.log("")
console.log("Vous avez " + personageMoney + " Euros")
console.log("Vous avez " + personageFruits + " Fruits")
console.log("Produits acheter: " + buyFruits)
console.log("")

//2//

let box = ["pomme", "poire", "orange"]

box.forEach( function(box) {
    console.log(box)
})

console.log(box[1]);*/



/*
console.log("%cMessage normal : Ceci est un message normal.");
console.warn("Message d'attention : Attention, ceci est un avertissement !");
console.error("Message d'erreur : Une erreur s'est produite !");


let name0 = "Abexis";
let name2 = "Ack";
let name3 = "Benjamin";

if (name0 < name2 && name2 < name3) {
    console.log("tkt c chill");

} else {
    console.log("c pas chill");
}

const note = parseInt(prompt("entre qq chose"));

function afficherDate() {
    console.log("La date actuelle est " + new Date().toDateString());
}

afficherDate();

let tableau = ["Ordinateur", "Smartphone","Tablette","Montre Connectée","Casque Audio"];
tableau.push("Camera");
console.log(tableau); */