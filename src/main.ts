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

// Récolter les graines à partir de la case L
console.log("Récolter depuis la case L");
console.log(`Graines récoltées : ${board.harvest(11)}`);
board.display();

// Je vérifie si le tableau est vide
console.log("\nLe plateau est-il vide ?", board.isEmpty());

// Test getNextCase(index);
// console.log(board.getNextCase(5));
// console.log(board.getNextCase(11));
// console.log(board.getNextCase(7));

// Test getPreiousCase(index);
// console.log(board.getPreviousCase(5));
// console.log(board.getPreviousCase(11));
// console.log(board.getPreviousCase(0));

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
