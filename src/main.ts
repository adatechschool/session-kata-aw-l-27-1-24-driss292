import { AweleBoard } from "./AweleBoard";
import { Player } from "./Player";

// Création d'un tableau
const board = new AweleBoard();

// Affichage du tableau dans la console
console.log("Plateau initial :");
board.display();

// Semer les graines de la case A
console.log("Semer depuis la case A");
board.saw(0);
board.display();

// Semer les graines de la case E
console.log("Semer depuis la case E");
board.saw(4);
board.display();

// Je vérifie si le tableau est vide
console.log("\nLe plateau est-il vide ?", board.isEmpty());

console.log("----------------------------------------");
console.log("----------------------------------------");
console.log("----------------------------------------");

// Initialisation de(s) joueur(s)
const playerOne = new Player("Joueur 1");
console.log(`${playerOne.getName()} a un score de ${playerOne.getScore()}`);

// J'incrémente le score du joueur 1 avec une valeur positive
playerOne.incrementScore(4);
console.log(`${playerOne.getName()} a un score de ${playerOne.getScore()}`);

// J'incrémente le score du joueur 1 avec une valeur négative
playerOne.incrementScore(-2);
console.log(`${playerOne.getName()} a un score de ${playerOne.getScore()}`);
