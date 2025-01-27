class AweleBoard {
  private letters: string[];
  private cases: number[];
  private seedCount = 4; // nombre initial de graines par case

  constructor() {
    // J'initialise le plateau de jeu avec 12 cases contenant 4 graines chacune
    this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    this.cases = Array(this.letters.length).fill(this.seedCount);
  }

  public display(): void {
    // Affichage du plateau de jeu sous forme de grille
    /*
     A  B  C  D  E  F
    (4)(4)(4)(4)(4)(4)
    (4)(4)(4)(4)(4)(4)
    G  H  I  J  K  L
    */

    // Affichage A-F
    console.log("   " + this.letters.slice(0, 6).join("  "));
    // Affichage des graines des cases A-F
    console.log("  (" + this.cases.slice(0, 6).join(")(") + ")");
    // Affichage des graines des cases G-L
    console.log("  (" + this.cases.slice(6, 12).join(")(") + ")");
    // Affichage G-L
    console.log("   " + this.letters.slice(6, 12).join("  "));
  }

  public isEmpty(): boolean {
    return this.cases.every((seed) => seed === 0);
  }
}

// Création d'un tableau
const board = new AweleBoard();

// Affichage du tableau dans la console
console.log("Plateau initial :");
board.display();

// Je vérifie si le tableau est vide
console.log("\nLe plateau est-il vide ?", board.isEmpty());
