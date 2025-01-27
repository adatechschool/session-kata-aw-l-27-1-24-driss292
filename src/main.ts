import { AweleBoard } from "./AweleBoard";
import { Player } from "./Player";

// Création d'un tableau
const board = new AweleBoard();

// Affichage du tableau dans la console
console.log("Plateau initial :");
board.display();

// Je vérifie si le tableau est vide
console.log("\nLe plateau est-il vide ?", board.isEmpty());

// Initialisation de(s) joueur(s)

const playerOne = new Player("Joueur 1");
console.log(`${playerOne.getName()} a un score de ${playerOne.getScore()}`);

// J'incrémente le score du joueur 1 avec une valeur positive
playerOne.incrementScore(4);
console.log(`${playerOne.getName()} a un score de ${playerOne.getScore()}`);

// J'incrémente le score du joueur 1 avec une valeur négative
playerOne.incrementScore(-2);
console.log(`${playerOne.getName()} a un score de ${playerOne.getScore()}`);
