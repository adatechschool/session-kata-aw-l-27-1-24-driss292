export class AweleBoard {
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

  // J'uitlise le modulo % pour simuler un plateau circulaire pour éviter de return un valeur hors du plateau
  public getNextCase(index: number): number {
    return (index + 1) % this.cases.length;
  }

  public getPreviousCase(index: number): number {
    return (index - 1 + this.cases.length) % this.cases.length;
  }

  // Semer les graines à partir d'une case
  public saw(startIndex: number): void {
    let seeds = this.cases[startIndex];

    if (seeds === 0) {
      console.log("Impossible de semer depuis une case vide");
      return;
    }

    this.cases[startIndex] = 0;
    let currentIndex = startIndex;

    while (seeds > 0) {
      currentIndex = this.getNextCase(currentIndex);
      this.cases[currentIndex] += 1;
      seeds--;
    }
  }

  // Récolter les graines à partir d'une case
  public harvest(startIndex: number): number {
    let totalSeeds = 0;
    let currentIndex = startIndex;

    // Je commance la récolte de la case de départ et des cases précédentes
    do {
      // Si la case contient des graines, on les récolte
      if (this.cases[currentIndex] > 0) {
        // Ajouter les graines de la case à totalSeeds
        totalSeeds += this.cases[currentIndex];
        // Vider la case après récolte
        this.cases[currentIndex] = 0;
      }
      // Je passe à la case précédente
      currentIndex = this.getPreviousCase(currentIndex);
      // La récolte s'arrête si on revient à la case de départ ou si la case est vide
    } while (currentIndex !== startIndex && this.cases[currentIndex] !== 0);

    return totalSeeds;
  }
}
